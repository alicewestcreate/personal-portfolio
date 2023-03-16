import React from "react";
import { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, createRoutesFromChildren } from "react-router-dom";
import { NavLink } from "react-router-dom";
import test from "./test-data.json";

import "./pages.css"
import wild from "./images/wildswimming.jpg"
import task from "./images/taskmanager.jpg"
import weather from "./images/weather.jpg"




const PortfolioNav = (props) => {
  // console.log(props);

  // Protfolio Nav return the links for the project navigation
  // It loops through the JSON file and applies the coorosponding information
  // to each section.

  // I am want to loop through the list of projects, 
  // and import the image based on the image page
  // then I want to create a section that has the image and the information in. 

  const [images, setImages] = useState([]);

  const data = test;
  const projectJSON = test
  // console.log(projectJSON[0].path);
  
  const imagePaths = projectJSON.map((project) => {
    return project.backgroundImage;

  })

  useEffect(()=> {
    async function loadImages() {
      console.log("1. in function");
      const imagePaths2 = imagePaths
      console.log("2. Image Paths",imagePaths2);

      const promises = imagePaths2.map(eachPath => import(`${eachPath}`))
      console.log("3. Promises...", promises);
      const imageImports = await Promise.all(promises).then((values) => {
        console.log(values);
      })
      // console.log("4. imageImports....",imageImports);
      // const imageUrls = imageImports.map(image => image.default)
      // console.log("5. URL >>>>> ",imageUrls);
    }
    loadImages()
  },[imagePaths])



  // console.log(imagePaths);

  // {images.map((imageUrl, index) => (
  //   <img key={index} src={imageUrl} alt={`Image ${index}`}/>
  //   ))}


  // const getarrayOfImagePath = () => {
  //   const arrayOfImagePath = []
  //   for (let i = 0; i <data.length; i++) {
  //     arrayOfImagePath.push(data[i].backgroundImage)
  //   }
  //   return arrayOfImagePath

  // }
  // let imagesPaths = getarrayOfImagePath()
  
  // console.log(imagesPaths);



  // useEffect(() => {
  //   async function loadImages() {
  //     const promises = imagesPaths.map(path => import(`${path}`))
  //     const imageImports = await Promise.all(promises)
  //     const imageUrls = imageImports.map(image => image.default)
  //     setImages(imageUrls)
  //   }
  //   loadImages()

  // },[imagesPaths])







  // // Returns an array of paths to images 
  // const getImageArray = data.map((project) => {
  //   return project.backgroundImage
  // })

  // console.log(getImageArray);
  
  // // this runs the function called load images, which runs asyncously
  // // it waits until it is imports all images 
  // useEffect(() => {
  //   async function loadImages() {
  //     const images = await import(getImageArray())
  //     setImages(images.default)
  //   }
  //   loadImages()
  // },[props.imageName])

  // console.log(">>",props.imageName);






    
  // useEffect(() => {
  //   async function loadImages() {
  //     const images = await import(".//images/taskmanager.jpg")
  //     setImages(images.default)
  //   }
  //   loadImages()
  // },[props.imageName])

  // console.log(">>",images);


  // Loop through the test-data.json file 
  // Get the data value from each loop
  // Update the data value inside the NavLink component
  // Append that NavLink component to a NavLinkContainer 


  const NavLinkContainer = data.map((project) => {
    // console.log(project.image);
    return <section className="project" style={{backgroundImage: `url(${project.backgroundImage})`}}><NavLink to={project.path} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}
    ><h2>{" "}{project.title}{" "}</h2></NavLink></section>

  }) 

  return (
    
    <div id="project-container">
      {/* {data.map((project) => (
        <section className="project" style={{backgroundImage: `url(${project.backgroundImage})`}}><NavLink to={project.path} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}
        ><h2>{" "}{project.title}{" "}</h2></NavLink></section>
      ))} */}


      {NavLinkContainer}
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index}`}/>
        ))}

    </div>
  );
};

export default PortfolioNav;
