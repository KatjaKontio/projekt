import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const Profile = () => {
    const [authUser, setAutUser] = useContext(UserContext)
    return (
        <div>
            <img src={'https://thispersondoesnotexist.com/image'} alt={''} />
            {authUser.username}
        </div>
    )
}
