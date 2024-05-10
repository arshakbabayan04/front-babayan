import { useState } from 'react';
import Dropdown from '../UI/dropdown/Dropdown';
import './menu.scss';
import Hamburger from '../UI/Hamburger/Hamburger';

const Menu = ({isSticky, menuRef}) => {
    const [menuActive, setMenuActive] = useState(false);

    const onMenuActive = (e) => {
        setMenuActive(active => !active)
    }

    return ( 
        <div 
            ref={menuRef} 
            className={`menu ${isSticky} ${menuActive ? 'menu_active' : ''}`}
            onClick={() => setMenuActive(false)} >
            <div className="container" onClick={e => e.stopPropagation()}>
                <nav className={menuActive ? 'menu_nav menu_nav_active' : 'menu_nav'}>
                    <ul className="menu_list">
                        <li className="menu_item">
                            <a href="#" className="menu_link">
                                Demos
                            </a>
                            <Dropdown links={["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post",]}/>
                        </li>
                        <li className="menu_item">
                            <a href="#" className="menu_link">
                                Post
                            </a>
                            <Dropdown links={["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post",]}/>
                        </li>
                        <li className="menu_item">
                            <a href="#" className="menu_link">
                                Features
                            </a>
                            <Dropdown links={["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post",]}/>
                        </li>
                        <li className="menu_item">
                            <a href="#" className="menu_link">
                                Categories
                            </a>
                            <Dropdown links={["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post",]}/>
                        </li>
                        <li className="menu_item">
                            <a href="#" className="menu_link">
                                Shop
                            </a>
                            <Dropdown links={["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post",]}/>
                        </li>
                    </ul>
                    <button className="menu_btn">Buy now</button>
                </nav>
                <Hamburger menuActive={menuActive} onMenuActive={onMenuActive}/>
            </div>
        </div>
    );
}
 
export default Menu;