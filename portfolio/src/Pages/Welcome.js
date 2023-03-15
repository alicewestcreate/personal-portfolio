import React from "react";
import profile from "./images/profile.jpg";

const Welcome = () => {
  //

  return (
    <section id="welcome">
      <div class="container">
        <div class="imgcontainer">
          <img src={profile}></img>
        </div>
        <div class="textcontainer">
          <h1>Hi, I'm Alice</h1>
          <h3>Front End Developer</h3>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
