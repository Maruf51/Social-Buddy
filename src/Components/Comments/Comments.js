import React, { useState, useEffect } from 'react';
import './Comments.css'
import CommentImage from '../CommentImage/CommentImage';
import { Box } from '@material-ui/core';

const Comments = (props) => {
    const id = props.id;
    const commentStatus = props.commentStatus;
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);

    
    console.log(id)
    return (
        <div style={{display: `${commentStatus}`}}>
            <h2 className="comment">Comments</h2>
            {
                comments.map(comment => 
                    <Box key={comment.id} bg="#3a3b3c" p={2.5} my={2.5} mx={0} border={1} borderRadius={25} borderColor="#464646" >
                        <CommentImage id={comment.id}></CommentImage>
                        <div>
                            <Box fontWeight={500} m={0} pl={9.5} className="commentHead">{comment.name}</Box>
                            <Box fontWeight={500} m={0} pl={9.5} mb={1.5} className="commentHead">{comment.email}</Box>
                            <Box fontWeight={300} mb={0} className="commentBody">{comment.body}</Box>
                        </div>
                    </Box>
                )
            }
        </div>
    );
};

export default Comments;