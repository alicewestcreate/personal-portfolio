import React from 'react';

const ImageContainer = ({content, image}) => {
    console.log("images",content);
    return (
        <div>   
            <img src={image} alt="React Image" />
        </div>
    );
}

export default ImageContainer;
