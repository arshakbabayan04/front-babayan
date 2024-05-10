import './postListItem.scss';

const PostListItem = ({img, img_2x, tag, title, autor, date, views, text, index, onPopupOpen}) => {
    return ( 
        <li className="post" onClick={() => onPopupOpen(index)}>
            <img src={img} srcSet={`${img} 1x, ${img_2x} 2x`} alt="post" className="post_img" />
            <span className="post_tag">{tag}</span>
            <div className="post_title">{title}</div>
            <div className="post_info_block">
                <div className="post_info_block_autor">{autor}</div>
                <div className="post_info_block_date">{date}</div>
                <div className="post_info_block_views">{views}</div>
            </div>
            <p className="post_text">{text}</p>
        </li>
    );
}
 
export default PostListItem;