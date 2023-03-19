import React from "react";
import Button from "../Components/Button";
import profile from "./images/profile.jpg";
import projectJSON from "./test-data.json";
import "./pages.css"
import "../Components/Compenents.css"

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
          <div class="buttonContainer">
          <Button
            classN={"project-buttons"}
            links={projectJSON}
            text={"Portfolio"}
          ></Button>
          <Button
            classN={"project-buttons"}
            links={projectJSON}
            text={"Contact"}
          ></Button>
        </div>
        </div>
      </div>


       
    </section>
  );
};

export default Welcome;
