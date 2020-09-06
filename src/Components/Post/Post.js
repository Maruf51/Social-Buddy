import React, { useState } from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
}));

const Post = (props) => {
    const {title, body, id} = props.post;
    const classes = useStyles();

    const [commentStatus, setCommentStatus] = useState('none');
    const showCommentBtn = () => {
        setCommentStatus('block')
    };

    const hideCommentBtn = () => {
        setCommentStatus('none')
    };
    return (
        
        <Box bgcolor="#242526" my={2.5} width="60%" mx="auto" p={2.5} border={1} borderColor="grey.800" borderRadius={16} className={classes.root}>
          <Box mt={0} fontWeight={700} mb={3} className="postTitle">{title}</Box>
          <p className="postBody">{body}</p>
          <Button variant="contained" color="secondary" className="detailsButton"><Link to={"/post/"+id}>See Info</Link></Button>
          <Button onClick={() => showCommentBtn(id)} variant="contained" color="primary" className="detailsButton" style={{marginLeft: '20px'}}>Show Comments</Button>
          <Button onClick={() => hideCommentBtn(id)} variant="contained" color="primary" className="detailsButton" style={{marginLeft: '20px'}}>Hide Comments</Button>
          <Comments commentStatus={commentStatus} id={id}></Comments>
        </Box>
    );
};

export default Post;