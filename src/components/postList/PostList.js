import { useEffect, useMemo, useState } from 'react';
import './postList.scss';
import usePostService from '../../services/PostService';
import Spinner from '../UI/spinner/Spinner';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import PostListItem from '../postListItem/PostListItem';
import Popup from '../UI/popup/Popup';

const PostList = ({inputValue}) => {
    const [posts, setPosts] = useState([]);
    const [postIndex, setPostIndex] = useState(null);
    const [popupOpen, setPopupOpen] = useState(false);

    const {getAllPosts, error, loading} = usePostService();

    useEffect(() => {
        getAllPosts()
            .then(post => setPosts(post));
        // eslint-disable-next-line
    }, [])

    const filteredPosts = useMemo(() => {
        if (inputValue === '') {
            return posts
        } else {
            return posts.filter((post) => {
                return (
                    post.title.toLowerCase().includes(inputValue.toLowerCase()) || 
                    post.tags.toLowerCase().includes(inputValue.toLowerCase())
                )
            })
        }
    }, [inputValue, posts])

    const onPopupOpen = (index) => {
        setPostIndex(index);
        setPopupOpen(popupOpen => !popupOpen);
    }

    function renderPosts(arr) {
        const items = arr.map((item, i) => {
            return (
                <PostListItem 
                    key={i}
                    img={item.img} 
                    img_2x={item.img_2x} 
                    tag={item.tags} 
                    title={item.title} 
                    autor={item.autor} 
                    date={item.date} 
                    views={item.views} 
                    text={item.text}
                    index={i}
                    onPopupOpen={onPopupOpen}/>
            )
        });

        return (
            <ul className="post_list_flex">
                {items}
            </ul>
        )
    }

    const items = renderPosts(filteredPosts);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(error || loading) ? items : null;

    const singlePost = filteredPosts[postIndex];

    return ( 
        <div className="post_list">
            <div className="container">
                {errorMessage}
                {spinner}
                {content}
            </div>
            {popupOpen && <Popup 
                img={singlePost.img} 
                img_2x={singlePost.img_2x} 
                tag={singlePost.tags} 
                title={singlePost.title} 
                autor={singlePost.autor} 
                date={singlePost.date} 
                views={singlePost.views} 
                text={singlePost.text}
                onPopupOpen={onPopupOpen}
                isOpen={popupOpen}/>}
        </div>
    );
}

 
export default PostList;