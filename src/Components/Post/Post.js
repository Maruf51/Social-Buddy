import React, { useState } from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Post = (props) => {
    const {title, body, id} = props.post;
    

    const [commentStatus, setCommentStatus] = useState('none');
    const showCommentBtn = () => {
        setCommentStatus('block')
    };

    const hideCommentBtn = () => {
        setCommentStatus('none')
    };
    return (
        
        <div className="posts">
            <h2>{title}</h2>
            <p>{body}</p>
            <Button variant="contained" color="primary" className="detailsButton"><Link to={"/post/"+id}>See Info</Link></Button>
            <Button onClick={() => showCommentBtn(id)} variant="contained" color="primary" className="detailsButton" style={{marginLeft: '20px'}}>Show Comments</Button>
            <Button onClick={() => hideCommentBtn(id)} variant="contained" color="primary" className="detailsButton" style={{marginLeft: '20px'}}>Hide Comments</Button>
            <Comments commentStatus={commentStatus} id={id}></Comments>
        </div>
    );
};

export default Post;