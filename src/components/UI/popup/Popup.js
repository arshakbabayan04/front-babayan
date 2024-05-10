import './popup.scss';

const Popup = ({img, img_2x, tag, title, autor, date, views, text, onPopupOpen, isOpen}) => {
    return ( 
        <div id="popup" className={isOpen ? 'popup active' : 'popup'} onClick={() => onPopupOpen()}>
            <div className="popup_content" onClick={e => e.stopPropagation()}>
                <span className="close" id="closePopup" onClick={() => onPopupOpen()}>&times;</span>
                <div className="popup_wrapper">
                    <div className="popup_img">
                        <img src={img} srcSet={`${img} 1x, ${img_2x} 2x`} alt="popup_img"/>
                    </div>
                    <div className="popup_wrapper_content">
                        <div className="popup_wrapper_content_title">{title}</div>
                        <div className="popup_wrapper_content_tag">{tag}</div>
                        <div className="popup_info_block">
                            <div className="popup_info_block_autor">{autor}</div>
                            <div className="popup_info_block_date">{date}</div>
                            <div className="popup_info_block_views">{views}</div>
                        </div>
                        <p className="popup_wrapper_content_text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Popup;