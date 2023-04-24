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
              <span id="heroLine"></span>
            </p>
           
          </div>
          <div id="heroImageContainer">
            <div id="profileImage">
              {/* <img id="profileImage" src={profile}></img> */}
            </div>
          </div>
        </div>
      </section>
    );
}

export default HeroWelcomePage;
