import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import profile from "./images/profile.jpg";
import projectJSON from "./project-data.json";
import "./pages.css";
import "../Components/Compenents.css";

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
            <Link to="/portfolio">
              <Button
                classN={"project-buttons"}
                links={projectJSON}
                text={"Portfolio"}
              ></Button>
            </Link>
            <Link to="/contact">
              <Button
                classN={"project-buttons"}
                links={projectJSON}
                text={"Contact"}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
