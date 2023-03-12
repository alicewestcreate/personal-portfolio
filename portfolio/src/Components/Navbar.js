import React from "react";
import { NavLink } from "react-router-dom";
import InternalLink from "./InternalLink";


const Navbar = () => {
  return (
    <div>
      <InternalLink to={"/"} text={"Welcome"}/>
      <InternalLink to={"/portfolio"} text={"Portfolio"}/>
    </div>
  );
};

export default Navbar;
