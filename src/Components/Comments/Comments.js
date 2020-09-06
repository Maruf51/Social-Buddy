import React, { useState, useEffect } from 'react';
import './Comments.css'
import CommentImage from '../CommentImage/CommentImage';

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
                comments.map(comment => <div key={comment.id} className="comments">
                                    <CommentImage id={comment.id}></CommentImage>
                                    <div>
                                        <p>{comment.name}</p>
                                        <p>{comment.email}</p>
                                        <h3 className="comment-body">{comment.body}</h3>
                                    </div>
                                </div>)
            }
        </div>
    );
};

export default Comments;