import './hamburger.scss'

const Hamburger = ({menuActive, onMenuActive}) => {
    return (  
        <div className={menuActive ? 'hamburger hamburger_active' : 'hamburger'} 
            onClick={(e) => onMenuActive(e)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
 
export default Hamburger;