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
                    <li><a href="/home">Hem</a></li>
                    <li><a href="">Timer</a></li>
                    <li><a href="">Övningar</a></li>
                    <li><a  onClick={() => history.push('/about')}>Om oss</a></li>
                </div>
            </ul>


        </div>
    )
}
