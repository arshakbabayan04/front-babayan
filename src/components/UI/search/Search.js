import { useEffect, useState } from 'react';
import search from '../../../icons/search.svg';
import './search.scss';

const Search = (props) => {
    const [inputValue, changeInputValue] = useState('');
    const [searchActive, setSearchActive] = useState(false);

    useEffect(() => {
        props.changeInputValue(inputValue);
        // eslint-disable-next-line
    }, [inputValue])

    const onInputUpdate = (e) => {
        changeInputValue(e.target.value);
    }

    return ( 
        <div className="search">
            <form className={searchActive ? "search_form search_form_active" : "search_form"} action="/submit" method="post">
                <span className="search_form_close" id="search_close" onClick={() => setSearchActive(false)}>&times;</span>
                <input placeholder='Search' type="text" id="inputField" name="inputField" value={inputValue} onChange={onInputUpdate}/>
            </form>
            <img src={search} alt="Search" onClick={() => setSearchActive(active => !active)}/>
        </div>
    );
}
 
export default Search;