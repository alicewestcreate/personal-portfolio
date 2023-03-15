import React from 'react';

const ImageContainer = ({content}) => {
    console.log("images",content);
    return (
        <div className={content}>
        </div>
    );
}

export default ImageContainer;
