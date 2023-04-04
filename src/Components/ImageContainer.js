import React from "react";
import { useEffect, useState } from "react";

const ImageContainer = (props) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function loadImage() {
      const image = await import(`../Pages/images/${props.image}`);
      setImage(image.default);
    }
    loadImage();
  },);

  return (
    <div>
      <img src={image} alt="dectrotive" />
    </div>
  );
};

export default ImageContainer;
