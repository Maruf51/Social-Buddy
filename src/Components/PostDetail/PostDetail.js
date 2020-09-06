import React, { useState, useEffect } from 'react';
import './PostDetail.css'
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const display = 'block';

    return (
        <div className="post-detail">
            <div className="postDetail">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <Comments commentStatus={display} id={postId}></Comments>
        </div>
    );
};

export default PostDetail;