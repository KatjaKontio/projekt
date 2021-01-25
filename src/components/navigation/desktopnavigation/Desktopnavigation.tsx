/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './Desktopnavigation.css'
import Logotype from '../../../shared/images/logo.png'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile} from '../../profile/Profile'


export const Desktopnavigation = () => {
    const history = useHistory();
    const [authUser, setAuthUser] = useContext(UserContext)

    const displaySignInButtonOrUsernameDependingOnAuth = () => {
        return authUser
            ? <Profile/> : 
            <span onClick={() => history.push(RoutingPath.signinPage)}>Signin</span>
    }
    return (
        <div className='desktopNavigationWrapper'>
            <div className="logoWrapper">
                <img onClick={() => history.push('/home')} className='navigationLogotype'
                    src={Logotype} />
            </div>

            <ul>
                <div className="navWrapper">
                    <li><a onClick={() => history.push(RoutingPath.homePage)}>Home</a></li>
                    <li><a onClick={() => history.push(RoutingPath.timerPage)}>Timer</a></li>
                    <li><a onClick={() => history.push(RoutingPath.exercisesPage)}>Exercises</a></li>
                    <li><a onClick={() => history.push(RoutingPath.aboutPage)}>About</a></li>
                    {displaySignInButtonOrUsernameDependingOnAuth()}
                </div>
            </ul>


        </div>
    )
}
