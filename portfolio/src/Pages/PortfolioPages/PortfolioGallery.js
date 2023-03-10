import React from 'react';
import PortfolioSection from './PortfolioSection';
import "./portfolio.css"

const PortfolioGallery = () => {
    return (
        <section id="project-container">
            <PortfolioSection id="one" class="project" title="Pool Position"></PortfolioSection>
            <PortfolioSection id="two" class="project" title="Task Manager"></PortfolioSection>
            <PortfolioSection id="three" class="project" title="Weather App"></PortfolioSection>
        </section>
    );
}

export default PortfolioGallery;
