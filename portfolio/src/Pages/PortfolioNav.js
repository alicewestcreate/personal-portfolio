import React from "react";
import { BrowserRouter as Router, Routes, Route, createRoutesFromChildren } from "react-router-dom";
import { NavLink } from "react-router-dom";
import test from "./test-data.json";
import "./pages.css"
import wild from "./images/wildswimming.jpg"
import task from "./images/taskmanager.jpg"
import weather from "./images/weather.jpg"




const PortfolioNav = () => {


  // Loop through the test-data.json file 
  // Get the data value from each loop
  // Update the data value inside the NavLink component
  // Append that NavLink component to a NavLinkContainer 

  


  const data = test;
  const NavLinkContainer = data.map((project) => {
    // console.log(project.image);
    return <section className="project" style={{backgroundImage: `url(${project.backgroundImage})`}}><NavLink to={project.path} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}
    ><h2>{" "}{project.title}{" "}</h2></NavLink></section>

  }) 
  return (
    <div id="project-container">
      {NavLinkContainer}
    </div>
  );
};

export default PortfolioNav;
