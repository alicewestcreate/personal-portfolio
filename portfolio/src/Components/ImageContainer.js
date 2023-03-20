import React from "react";
import { useEffect, useState } from "react";

const ImageContainer = (props) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function loadImage() {
      const image = await import(`../Pages/images/${props.image}`);
      console.log("LOG.>>", image);
      setImage(image.default);
    }
    loadImage();
  }, []);

  return (
    <div>
      <img src={image} alt="React Image" />
    </div>
  );
};

export default ImageContainer;
