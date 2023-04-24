import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../Components/Button";
// import profile from "./images/profile.jpg";
// import projectJSON from "./project-data.json";
import "./pages.css";
import "../Components/Compenents.css";
import HeroWelcomePage from "../Components/HeroWelcomePage.js/HeroWelcomePage";
import "./styleHomePage.css"


const Welcome = () => {
  return (
    <>
    <HeroWelcomePage/>
    <div id="divider"> </div>
    <section id="first">
      <div className="textWrapper">
        <div>
          <h2>Engineering</h2>
          <p>I love bringing everything together - whether it's uniting designs, aligning brand values with actions, or building program harmony. I love bringing everything together - whether it's uniting designs, aligning brand values with actions, or building program harmony. </p>
        </div>
        <div>
          <h2>Brand & Design</h2>
          <p>I love bringing everything together - I love bringing everything together whether it's uniting designs, aligning brand values with actions, or building program harmony. I love bringing everything together - whether it's uniting designs, aligning brand values with actions, or building program harmony. </p>
        </div>
      </div>
    </section>
    <section id="second">

      <div id="box">
      </div>
      <div className="text"> 

    <div id="textWrapper">

    <h2>Over the years</h2>
          <p>I love bringing everything together - I love bringing everything together whether it's uniting designs, aligning brand values with actions, or building program harmony. I love bringing everything together - whether it's uniting designs, aligning brand values with actions, or building program harmony. </p>




    </div>


      </div>

    </section>

    </>
  );
};

export default Welcome;

// <section id="welcome">
//   <div className="container">
//     <div className="imgcontainer">
//       <img src={profile} alt={"Profile of Author"}></img>
//     </div>
//     <div className="textcontainer">
//       <h1>Hi, I'm Alice</h1>
//       <h3>Front End Developer</h3>
//       <div className="buttonContainer">
//         <Link to="/portfolio">
//           <Button
//             classN={"project-buttons"}
//             links={projectJSON}
//             text={"Portfolio"}
//           ></Button>
//         </Link>
//         <Link to="/contact">
//           <Button
//             classN={"project-buttons"}
//             links={projectJSON}
//             text={"Contact"}
//           ></Button>
//         </Link>
//       </div>
//     </div>
//   </div>
// </section>
