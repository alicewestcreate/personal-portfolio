import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from "./Components/Nav/Navbar";
import Welcome from "./Pages/Welcome";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import "./Components/button.css"
import ScrollToTop from "./utils/ScrollToTop";



function App() {



  return (

      <Router>
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/portfolio/*" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>

  );
}

export default App;

