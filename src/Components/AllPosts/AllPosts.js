import React, { useState, useEffect } from 'react';
import './AllPosts.css';
import Post from '../Post/Post';
import { Box } from '@material-ui/core';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    const waitText = {
        fontSize: '12px',
    }
    return (
        <div>
            <Box color="#e6ee9c" align="center" style={waitText}>Please wait some time to load Comment Photo...</Box>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default AllPosts;