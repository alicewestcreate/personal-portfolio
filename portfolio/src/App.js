import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>Portfolio Gallery</h1>
    </div>
  );
};

function App() {
  return (
    <>
    <h1>Hello</h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link> 
    </>    


  );
}

export default App;

//   // <Router>
//   <div>
//   <h1>Hello</h1>
//   <Link to="/">Home</Link>
//   <Link to="/about">About</Link>
// </div>

//   <Routes>
//     <Route path="/" exact>
//       <Home />
//     </Route>

//     <Route path="/about" exact>
//       <About/>
//     </Route>
//   </Routes>
// </Router>
