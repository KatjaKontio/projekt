import { NavigationTabs } from '../../navigationtabs/NavigationTabs'
import './SideBar.css'

export const SideBar = (props: {drawerIsOpen: boolean, drawerHandler: Function}) => {
    return (
        <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            <span onClick={()=>props.drawerHandler(false)}>CLOSE</span>
     <NavigationTabs/>
        </div>
    )
}
