import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState} from "react"
import PortfolioNav from './PortfolioNav';
import "./pages.css"
import Project from './Project';
import test from "./test-data.json"

const Portfolio = () => {

    // console.log(project);

    // displayPortfolio is initially set to false.
    // return:
    // !displayPortfolio (which means, make displayPortfolio to be TRUE.)
    // && (PortfolioNav) (which mean, AND if the PortfolioNav is true)
    // display the Portfolio. 
    // Then on route > pass down the setPortfolioNav function and displayPortfolioNav to the child. 
    // In the section child run setPortfolioNav for the first time as true. 
    // Then return an annoymous function that calls setPortfolioNav() with the value of false. 
    // NOT SURE ON THIS Line : {!displayPortfolioNav && (<PortfolioNav/>)} 

    const [displayPortfolioNav, setPortfolioNav] = useState(false);

    const data = test;
    const internalRoute = data.map((project)=> {
        return <Route path={project.path} element={<Project setPortfolioNav={setPortfolioNav} displayPortfolioNav={displayPortfolioNav} project={project}/>}/>
    })


    return (
        <div>

           {!displayPortfolioNav && (<PortfolioNav/>)}
            <Routes>
                {internalRoute}
                {/* <Route path="pool-position" element={<Project setPortfolioNav={setPortfolioNav} displayPortfolioNav/>}/>
                <Route path="task-manager" element={<Project setPortfolioNav={setPortfolioNav} displayPortfolioNav/>}/>
                <Route path="weather-app" element={<Project setPortfolioNav={setPortfolioNav} displayPortfolioNav/>}/> */}
            </Routes>
        </div>
    );
}

export default Portfolio;

