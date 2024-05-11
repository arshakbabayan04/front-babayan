import './dropdown.scss'

const Dropdown = ({links}) => {
    return ( 
        <ul className="dropdown dropdown_disable">       
            {links && links.map((item, i) => {
                return (
                    <li key={i} className="dropdown_item">
                        <a href="#" className="dropdown_link">{item}</a>
                    </li>
                )
            })}
        </ul>
    );
}
 
export default Dropdown;