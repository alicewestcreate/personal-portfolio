import React, { useEffect } from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import ImageContainer from "../Components/ImageContainer";
import Title from "../Components/Title";
import SkillContainer from "../Components/SkillContainer";
import Footer from "../Components/Footer/Footer";
import SummarySection from "../Components/SummarySection/SummarySection";

const Project = ({ setPortfolioNav, displayPortfolioNav, project }) => {
  useEffect(
    () => {
      setPortfolioNav(true);
      return () => {
        console.log(displayPortfolioNav);
        setPortfolioNav(false);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <Header image={project.backgroundImage}></Header>
      <section className="project-main">
        <Title title={project.title} content={project.blurb}></Title>
        {/* <Blurb content={project.blurb}></Blurb> */}
        <SummarySection id={"overview"} title={"Overview"} content={project.summary.overview}></SummarySection>


        {/* <Paragraph ></Paragraph> */}
        <ImageContainer content={"demo"} image={project.demo}></ImageContainer>
        <SkillContainer skills={project.skills}></SkillContainer>
        <div className="buttonContainer">
          <a href={project.links.deployed} target={"blank"}>
            <Button
              classN={"project-buttons"}
              links={project.links}
              text={"Deployed Site"}
            ></Button>
          </a>
          <a href={project.links.repo} target={"blank"}>
            <Button
              classN={"project-buttons"}
              links={project.links}
              text={"Git Repo"}
            ></Button>
          </a>
        </div>
        <SummarySection id={"features"} title={"Features and Functionality"} content={project.summary.features}></SummarySection>
        <SummarySection id={"design"} title={"Design and Architecture"} content={project.summary.design}></SummarySection>
        <SummarySection id={"challenage"} title={"Challenges and Solutions"} content={project.summary.challenges}></SummarySection>
        {/* <SummarySection id={"testing"} title={"Testing and Debugging"} content={project.summary.testing}></SummarySection> */}
        <SummarySection id={"results"} title={"Results and Impact"} content={project.summary.results}></SummarySection>
        <SummarySection id={"future"} title={"Future Improvements"} content={project.summary.future}></SummarySection>
        
      </section>
      <Footer></Footer>
    </div>
  );
};
export default Project;
