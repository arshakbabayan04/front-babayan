import { useCallback, useEffect, useRef, useState } from 'react';
import Dropdown from '../UI/dropdown/Dropdown';
import Hamburger from '../UI/Hamburger/Hamburger';
import logo from '../../icons/logo.svg';

import './menu.scss';

const Menu = ({isSticky, menuRef}) => {
    const [menuActive, setMenuActive] = useState(false);
    const [menuItems, setMenuItems] = useState([
        {
            id: 1,
            title: 'Demos',
            dropdown_data: ["Sliders and Carousels", "Parallax Effects", "Popups and Modals"]
        },
        {
            id: 2,
            title: 'Post',
            dropdown_data: ["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post"]
        },
        {
            id: 3,
            title: 'Features',
            dropdown_data: ["Sliders and Carousels", "Popups and Modals"]
        },
        {
            id: 4,
            title: 'Categories',
            dropdown_data: ["Images and Galleries", "Text and Styling", "Interactive Elements"]
        },
        {
            id: 5,
            title: 'Shop',
            dropdown_data: ["Desktop Version", "Tablet Version", "Mobile Version"]
        }
    ])
    
    const menuListRef = useRef(null);
    
    useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'initial';
        }
    }, [menuActive])


    // We can close menu with Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setMenuActive(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const onMenuActive = useCallback(() => {
        setMenuActive(active => !active);
    }, [])

    const onItemClick = useCallback((e) => {
        e.currentTarget.classList.toggle('menu_item_click');
    }, []);

    return ( 
        <div 
            ref={menuRef} 
            className={`menu ${isSticky} ${menuActive ? 'menu_active' : ''}`}
            onClick={() => setMenuActive(false)} >
            <div className="container" onClick={e => e.stopPropagation()}>
                <div className={menuActive ? 'menu_logo_active' : 'menu_logo'}>
                    <img src={logo} alt="Logo"/>
                </div>
                <nav className={menuActive ? 'menu_nav menu_nav_active' : 'menu_nav'}>
                    <ul className="menu_list" ref={menuListRef}>
                        {menuItems && menuItems.map((item) => {
                            return (
                                <li key={item.id} className="menu_item" onClick={onItemClick}>
                                    <span className="menu_link">
                                        {item.title}
                                    </span>
                                    <Dropdown links={item.dropdown_data}/>
                                </li>
                            )
                        })}
                    </ul>
                    <a href='/' className="menu_buy_link">Buy now</a>
                </nav>
                <Hamburger menuActive={menuActive} onMenuActive={onMenuActive}/>
            </div>
        </div>
    );
}
 
export default Menu;