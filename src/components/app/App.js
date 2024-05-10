import { useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import PostList from "../postList/PostList";

const App = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const menuRef = useRef();
    const headerRef = useRef();

    const changeInputValue = (value) => {
        setInputValue(value);
    }

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = headerRef.current.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > headerHeight) {
                setIsSticky(true);
                
            } else {
                setIsSticky(false);
            }

            if (scrollPosition > 200) {
                menuRef.current.style.top="-80px";
            } else {
                setIsSticky(true);
                menuRef.current.style.top="0";
            }
        };

        window.addEventListener('scroll', handleScroll);

        if (window.innerWidth <= 1023) {
            window.removeEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ( 
        <div className="app">
            <Header headerRef={headerRef} changeInputValue={changeInputValue}/>
            <Menu menuRef={menuRef} isSticky={isSticky ? 'sticky' : ''}/>
            <PostList inputValue={inputValue}/>
        </div>
    );
}
 
export default App;