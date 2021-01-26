import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
    const [authUser, setAutUser] = useContext(UserContext)
    return (
        <div className='profileWrapper'>
            <img className='profileImg' src={'https://thispersondoesnotexist.com/image'} alt={''} />
            <div>{authUser.username}</div>
            <div className='profileDropdown'>
                <span>alt 1</span>
                <span>alt 2</span>
                <span>alt 3</span>
            </div>
        </div>
    )
}
