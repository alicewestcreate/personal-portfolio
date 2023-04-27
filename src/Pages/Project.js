import React, { useEffect } from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import ImageContainer from "../Components/ImageContainer";
import Title from "../Components/Title";
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
        <SummarySection className={"summary"} id={"overview"} title={"Overview"} content={project.summary.overview}></SummarySection>

        <ImageContainer content={"demo"} alt={project.alt}image={project.demo}></ImageContainer>
        <SummarySection className={"summary"} id={"technology"} title={"Technologies"} content={project.summary.technology}></SummarySection>

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
        <SummarySection className={"summary"} id={"features"} title={"Features and Functionality"} content={project.summary.features}></SummarySection>
        <SummarySection className={"summary"} id={"design"} title={"Design and Architecture"} content={project.summary.design}></SummarySection>
        <SummarySection className={"summary"} id={"challenage"} title={"Challenges and Solutions"} content={project.summary.challenges}></SummarySection>
        {/* <SummarySection id={"testing"} title={"Testing and Debugging"} content={project.summary.testing}></SummarySection> */}
        <SummarySection className={"summary"} id={"results"} title={"Results and Impact"} content={project.summary.results}></SummarySection>
        <SummarySection className={"summary"} id={"future"} title={"Future Improvements"} content={project.summary.future}></SummarySection>
        
      </section>
      <Footer></Footer>
    </div>
  );
};
export default Project;
