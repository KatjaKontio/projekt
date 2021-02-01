import './Mobilenavigation.css'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import { useState} from 'react'


export const Mobilenavigation = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    return (
        <div>
            <HamburgerButton drawerHandler={setOpenDrawer} />
            <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
        </div>
    )
}
