import React from "react";
import Navlink from "./Navlink";
import "./Navbar.css"

const Navbar = ({currentPage, handlePageChange}) => {


  return (
    <nav>
      <ul>
        <li>
          <a
            href="#welcome"
            onClick={() => handlePageChange("Welcome")}
            className = {currentPage === "Welcome" ? "active" : ""}
          >Welcome</a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className = {currentPage === "Portfolio" ? "active" : ""}
          >Portfolio</a>
        </li>

        {/* <Navlink 
                href="welcome" 
                handlePageChange={handlePageChange}
                >Welcome</Navlink> */}
      </ul>
    </nav>
  );
};

export default Navbar;
