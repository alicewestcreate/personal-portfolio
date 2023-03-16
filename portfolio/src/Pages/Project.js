import React, {useEffect} from 'react';
import Header from "../Components/Header"
import Button from "../Components/Button";
import ImageContainer from '../Components/ImageContainer';
import Paragraph from '../Components/Paragraph';
import Title from '../Components/Title';
import SkillContainer from '../Components/SkillContainer';


const Project = ({setPortfolioNav, displayPortfolioNav, project}) => {
    console.log("!!!",project.backgroundImage.default);



    useEffect(() => {setPortfolioNav(true)
        return () => {console.log(displayPortfolioNav); setPortfolioNav(false)}
         },[])
    


        //  useEffect(() => {
        //     // Call an async function, that imports a path for each path found in the array.
        //     // And map to variable name promises. 
        //     // then wait for all items in the promise array to return a value, 
        //     // and then map each image from imageImports, to image.default to get the default property. 
        //     // Finally, call setImages, with all the imageURLs as an array.
        
        //     async function loadImages() {
        //       const promises = imagePaths.map(eachPath => import(`${eachPath}`))
        //       const imageImports = await Promise.all(promises)
        //       const imageUrls = imageImports.map(image => image.default)
        //       setImages(imageUrls)
        //     }
        //     loadImages()
        //   },[])


    
    return (
        <div>
            {/* <h1>This is a a new section section</h1> */}
            <Header image={project.backgroundImage}></Header>
            <section className="project-main">
            <Title title={project.title}></Title>
            <Paragraph content={project.blurb}></Paragraph>
            <ImageContainer content={"demo"}></ImageContainer>
            <Button classN={"project-buttons"} links={project.links} text={"Deployed Site"}></Button>
            <Button classN={"project-buttons"}  links={project.links} text={"Git Repo"}></Button>

            <SkillContainer skills={project.skills}></SkillContainer>
            <Paragraph cotent={project.summary}></Paragraph>
   

            </section>

        </div>
    );
}
export default Project;
