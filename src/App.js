import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Pages/Welcome";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import "./Components/button.css"
// import PortfolioNav from "./Pages/PortfolioNav";

function App() {
  return (

      <Router>
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

