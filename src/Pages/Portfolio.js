import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { useState} from "react"
import PortfolioNav from './PortfolioNav';
import "./pages.css"
import Project from './Project';
import projectJSON from "./project-data.json"

const Portfolio = () => {

 // HOW THIS SECTION WORKS:
  // PortfolioNav is visable when when both displayPortfolioNav PortfolioNav are true. 
  // Else, do not show PortolfolioNav
  // When a project is clicked on from the navigation, change the displaypPortfolio to False. 
  // Pass down the setPortfolioNav function as properties, to each of the project.js files
  // and update the true/false statement from the child component.

    const [displayPortfolioNav, setPortfolioNav] = useState(false);

    const internalRoute = projectJSON.map((project)=> {
        return <Route path={project.path} element={<Project setPortfolioNav={setPortfolioNav} displayPortfolioNav={displayPortfolioNav} project={project}/>}/>
    })

    return (
        <div>

           {!displayPortfolioNav && (<PortfolioNav/>)}
            <Routes>
                {internalRoute}
            </Routes>
        </div>
    );
}

export default Portfolio;
