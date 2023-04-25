import React from 'react';
import "./style.css"

const HeroWelcomePage = () => {
    return (
        <section id="hero">
        <div id="heroContentWrapper">
          <div id="heroTextWrapper">
            <h1>Frontend Developer</h1>
            <p>
              I love bringing everything together - whether it's uniting
              designs, aligning brand values with actions, or building program
              harmony.
              <span></span>
            </p>
            
           
          </div>
          <div id="heroImageContainer">
            <div><div id="profileImage"></div></div>
          </div>
        </div>
      </section>
    );
}

export default HeroWelcomePage;
