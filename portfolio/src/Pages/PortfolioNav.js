import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Section from "./Section";

const PortfolioNav = () => {

  return (
    <div>
      <h1>PortfolioNav</h1>
      <NavLink
        to="section" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
        Section Project One
      </NavLink>
      
      <NavLink
        to="section2" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
        Section Project Two
      </NavLink>

    </div>
  );
};

export default PortfolioNav;
