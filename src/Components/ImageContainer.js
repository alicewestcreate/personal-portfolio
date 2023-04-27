import React from "react";
import { useEffect, useState } from "react";
import LazyLoad from 'react-lazy-load';


const ImageContainer = (props) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function loadImage() {
      const image = await import(`../Components/images/${props.image}`);
      setImage(image.default);
    }
    loadImage();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  return (
    <div>
       <LazyLoad>
      <img src={image} alt={props.alt} autoPlay/>
      </LazyLoad>
    </div>
  );
};

export default ImageContainer;
