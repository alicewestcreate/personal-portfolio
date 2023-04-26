import React from "react";
import "./style.css";

const HeroWelcomePage = () => {
  return (
    <section id="hero">
      <div id="heroContentWrapper">
        <div id="heroTextWrapper">
          <h1>Frontend Developer</h1>
          <p>
          “I live for bringing different elements together, whether it's
            connecting brand values to tangible actions, piecing together a
            design, or developing programs that work seamlessly.” — Alice West 
            <span></span>
          </p>
        </div>
        <div id="heroImageContainer">
          <div>
            <div id="profileImage"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWelcomePage;
