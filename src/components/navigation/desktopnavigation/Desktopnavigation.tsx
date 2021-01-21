/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './Desktopnavigation.css'
import Logotype from '../../../shared/images/logo.png'
import { useHistory } from 'react-router-dom'

export const Desktopnavigation = () => {
    const history = useHistory();
    return (
        <div className='desktopNavigationWrapper'>
            <div className="logoWrapper">
             <img onClick={() => history.push('/home')} className='navigationLogotype'
                    src={Logotype}/>
            </div>

            <ul>
                <div className="navWrapper">
                    <li><a onClick={() => history.push('/RoutingPath.HomePage')}>Home</a></li>
                    <li><a onClick={() => history.push('/timer')}>Timer</a></li>
                    <li><a onClick={() => history.push('/exercises')}>Exercises</a></li>
                    <li><a onClick={() => history.push('/about')}>About</a></li>
                    <li><a onClick={() => history.push('/signin')}>Sign in</a></li>
                </div>
            </ul>


        </div>
    )
}
