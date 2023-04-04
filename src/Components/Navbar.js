import React from "react";
import InternalLink from "./InternalLink";
import "./Compenents.css";

const Navbar = () => {
  return (
    <nav>
      <InternalLink to={"/"} text={<i className="fa-solid fa-house fa-lg"></i>} />
      <InternalLink
        to={"/portfolio"}
        text={<i className="fa-solid fa-code fa-lg"></i>}
      />
      <InternalLink
        to={"/contact"}
        text={<i className="fa-solid fa-comment fa-lg"></i>}
      />
    </nav>
  );
};

export default Navbar;
