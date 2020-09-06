import React, { useEffect, useState } from 'react';
import './CommentImage.css'

const CommentImage = (props) => {
    const id = props.id;
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => setImages(data))
    }, []);
    const image = images.thumbnailUrl;
    return (
        <div className="commentImage">
            <img src={image} alt=""/>
        </div>
    );
};

export default CommentImage;