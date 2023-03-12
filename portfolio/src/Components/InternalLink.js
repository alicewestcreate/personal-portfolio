import React from "react";
import { NavLink } from "react-router-dom";

const InternalLink = ({to, text}) => {
  return (
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        {text}
      </NavLink>
  );
};

export default InternalLink;
