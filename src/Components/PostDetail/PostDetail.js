import React, { useState, useEffect } from 'react';
import './PostDetail.css'
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { Box } from '@material-ui/core';

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
        <Box width="60%" bgcolor="#242526" border={1} borderColor="#313131" borderRadius={16} my={2.5} mx="auto" p={2.5}>
            <Box pb={6} borderBottom={1} borderColor="lightGray" className="postDetail">
                <Box fontWeight={700}>{post.title}</Box>
                <p>{post.body}</p>
            </Box>
            <Comments commentStatus={display} id={postId}></Comments>
        </Box>
    );
};

export default PostDetail;