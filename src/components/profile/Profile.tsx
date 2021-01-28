import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
    const [authUser, setAutUser] = useContext(UserContext)
    return (
        <div className='profileWrapper'>
            <div className="hoverDropdown">
            <img className='profileImg' src={'https://thispersondoesnotexist.com/image'} alt={''} />
            <div className='profileUsername'>{authUser.username}</div>
            <div className='profileDropdown'>
                <span className='profileSpan'>Profile</span>
                <span className='profileSpan'>Settings</span>
                <span className='profileSpan logoutButton'>Log out</span>
                </div>
            </div>
        </div>
    )
}
