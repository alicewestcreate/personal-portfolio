import React from "react";
import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import projectJSON from "./test-data.json";
import "./pages.css"

const PortfolioNav = () => {

  const [images, setImages] = useState([]);

  // This variable returns an array of all the image paths from in the JSON file. 
  const imagePaths = projectJSON.map((project) => {
    return project.backgroundImage;
  })

  useEffect(() => {
    // Call an async function, that imports a path for each path found in the array.
    // And map to variable name promises. 
    // then wait for all items in the promise array to return a value, 
    // and then map each image from imageImports, to image.default to get the default property. 
    // Finally, call setImages, with all the imageURLs as an array.

    async function loadImages() {
      const promises = imagePaths.map(eachPath => import(`./images/${eachPath}`))
      const imageImports = await Promise.all(promises)
      const imageUrls = imageImports.map(image => image.default)
      setImages(imageUrls)
    }
    loadImages()
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [])


  // To create each section/compentent, assign the project properties to each section. 
  // Then using the index count from the map, get the images array (declared above), and count through 
  // each item in the array to get the corrosponding URL
  
  const NavLinkContainer = projectJSON.map((project, index) => {
    return <section className="project"  key={index} style={{backgroundImage: `url(${images[index]})`}}>
      <NavLink to={project.path} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}
    ><h2>{" "}{project.title}{" "}</h2></NavLink></section>
  }) 



  return (
  
    <div id="project-container">
      {NavLinkContainer}
    </div>
  );
};

export default PortfolioNav;
