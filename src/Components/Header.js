import React from "react";
import { useEffect, useState } from "react";

const Header = (props) => {
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
    <div className="hero" style={{ backgroundImage: `url(${image})` }}></div>
  );
};

export default Header;
