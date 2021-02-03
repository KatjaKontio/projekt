import { NavigationTabs } from '../../navigationtabs/NavigationTabs'
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faTimes} />

export const SideBar = (props: {drawerIsOpen: boolean, drawerHandler: Function}) => {
 
    return (
        <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            
        <span onClick={()=>props.drawerHandler(false)}><FontAwesomeIcon icon={faTimes} size = '2x' className="icon"/></span>
   
    <NavigationTabs/>
        </div>
    )
}
