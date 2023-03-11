import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PortfolioNav from './PortfolioNav';
import Section from './Section';
import Section2 from './Section2';

const Portfolio = () => {
    return (
        <div>
            <PortfolioNav/>
            <Routes>
                <Route path="section" element={<Section/>}/>
                <Route path="section2" element={<Section2/>}/>
            </Routes>
        </div>
    );
}

export default Portfolio;



// <Navbar></Navbar>
// <Routes>
//   <Route path="/" element={<Welcome/>}/>
//   <Route path="/portfolio" element={<PortfolioNav/>}/>
// </Routes>
// </Router>