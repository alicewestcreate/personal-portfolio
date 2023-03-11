import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

function App() {
  return (

      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/"><Home/></Route>
          <Route path="/about"><About/></Route>
        </Routes>
      </Router>

  );
}

export default App;

