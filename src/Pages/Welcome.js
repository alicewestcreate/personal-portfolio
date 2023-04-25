import React from "react";
import "./pages.css";
import "../Components/Compenents.css";
import HeroWelcomePage from "../Components/HeroWelcomePage/HeroWelcomePage";
import InfoWelcomePage from "../Components/InfoWelcomePage/InfoWelcomePage";

import "./styleHomePage.css";

const Welcome = () => {
  return (
    <>
      <HeroWelcomePage />
      <InfoWelcomePage/>

    </>
  );
};

export default Welcome;


