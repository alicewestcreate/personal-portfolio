import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState} from "react"
import PortfolioNav from './PortfolioNav';
import Section from './Section';
import Section2 from './Section2';

const Portfolio = () => {

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


    return (
        <div>
           
           {!displayPortfolioNav && (<PortfolioNav/>)}

            <Routes>
                <Route path="section" element={<Section setPortfolioNav={setPortfolioNav} displayPortfolioNav/>}/>
                <Route path="section2" element={<Section2/>}/>
            </Routes>
        </div>
    );
}

export default Portfolio;

