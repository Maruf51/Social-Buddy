import React, { useState, useEffect } from 'react';
import './AllPosts.css';
import Post from '../Post/Post';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default AllPosts;