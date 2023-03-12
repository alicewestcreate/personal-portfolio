import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";


const PortfolioNav = () => {



  return (
    <div>
      <h1>Portfolio Nav</h1>
      <NavLink
        to="project" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
        Section Project One
      </NavLink>      

    </div>
  );
};

export default PortfolioNav;
