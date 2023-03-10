import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import PortfolioGallery from "./PortfolioPages/PortfolioGallery";
import Welcome from "./Welcome";

const Cage = () => {
  const [currentPage, setcurrentPage] = useState("Welcome");

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Welcome":
        return <Welcome />;

      case "Portfolio":
        return <PortfolioGallery />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};

export default Cage;
