import { useCallback, useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import PostList from "../postList/PostList";
import { useSticky } from "../../hooks/useSticky";

const App = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const menuRef = useRef();
    const headerRef = useRef();

    // this is custom hook
    const {handleScroll} = useSticky();

    const changeInputValue = useCallback((value) => {
        setInputValue(value);
    }, [])

    const stickyScroll = () => {
        handleScroll(headerRef, setIsSticky, menuRef);
    }

    useEffect(() => {

        window.addEventListener('scroll', stickyScroll);

        if (window.innerWidth <= 1023) {
            window.removeEventListener('scroll', stickyScroll);
        }

        return () => {
            window.removeEventListener('scroll', stickyScroll);
        };
        // eslint-disable-next-line
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