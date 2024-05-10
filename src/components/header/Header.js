import logo from '../../icons/logo.svg';
import Search from '../UI/search/Search';
import './header.scss';

const Header = ({headerRef, changeInputValue}) => {
    return ( 
        <header ref={headerRef} className='header'>
            <div className="container">
                <div className="header_wrapper">
                    <div className="header_logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <Search changeInputValue={changeInputValue}/>
                </div>
            </div>
        </header>
    );
}
export default Header;