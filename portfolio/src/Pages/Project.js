import React, {useEffect} from 'react';
import Header from "../Components/Header"
import Button from "../Components/Button";
import ImageContainer from '../Components/ImageContainer';
import Paragraph from '../Components/Paragraph';
import Title from '../Components/Title';
import SkillContainer from '../Components/SkillContainer';
import poolposition from './/images/poolposition.gif';



const Project = ({setPortfolioNav, displayPortfolioNav, project}) => {
    console.log("!!!",project.backgroundImage.default);



    useEffect(() => {setPortfolioNav(true)
        return () => {console.log(displayPortfolioNav); setPortfolioNav(false)}
         },[])

    
    return (
        <div>
            {/* <h1>This is a a new section section</h1> */}
            <Header image={project.backgroundImage}></Header>
            <section className="project-main">
            <Title title={project.title}></Title>
            <Paragraph content={project.blurb}></Paragraph>
            <ImageContainer content={"demo"} image={poolposition}></ImageContainer>
            <SkillContainer skills={project.skills}></SkillContainer>
            <div class="buttonContainer">
            <a href={project.links.deployed}target={'blank'}><Button classN={"project-buttons"} links={project.links} text={"Deployed Site"}></Button></a>
            <a href={project.links.repo}target={'blank'}><Button classN={"project-buttons"}  links={project.links} text={"Git Repo"}></Button></a>
            </div>
           
            <Paragraph classN={"colView"} content={project.summary}></Paragraph>
   

            </section>

        </div>
    );
}
export default Project;
