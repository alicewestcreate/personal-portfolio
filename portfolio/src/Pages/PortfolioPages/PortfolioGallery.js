import React from 'react';
import { useState } from 'react';
import PortfolioSection from './PortfolioSection';
import ProjectPage from './ProjectPage';
import "./portfolio.css"

const PortfolioGallery = () => {
    const [projectPage, setprojectPage] = useState("one");
    console.log("were here")

    const handleProjectPageChange = (page) => {
        console.log("in function");
        console.log(page);
        setprojectPage(page)
    };

    const renderPage = () => {
        return <ProjectPage/>
    }


    return (
        <section id="project-container">

            <PortfolioSection id="one" class="project" title="Pool Position" 
            handleProjectPageChange={handleProjectPageChange} projectPage={projectPage} />
            <PortfolioSection id="two" class="project" title="Task Manager"/>
            <PortfolioSection id="three" class="project" title="Weather App"/>
            {renderPage()}
            

        </section>
    );
}

export default PortfolioGallery;
