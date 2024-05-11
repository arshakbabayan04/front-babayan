export const useSticky = () => {
    const handleScroll = (headerRef, setIsSticky, menuRef) => {
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

    return {handleScroll};
}