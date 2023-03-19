import React from "react";
import { NavLink } from "react-router-dom";
import InternalLink from "./InternalLink";
import "./Compenents.css"


const Navbar = () => {



  return (
    <nav>
      <InternalLink to={"/"} text={<i class="fa-solid fa-house fa-lg"></i>}/>
      <InternalLink to={"/portfolio"} text={<i class="fa-solid fa-code fa-lg"></i>}/>
      <InternalLink to={"/contact"} text={<i class="fa-solid fa-comment fa-lg"></i>}/>
    </nav>
  );
};

export default Navbar;
