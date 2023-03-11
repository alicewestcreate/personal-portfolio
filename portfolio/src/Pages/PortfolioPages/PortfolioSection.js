import React from "react";

const PortfolioSection = (props) => {
  console.log(props);


  return (
      <section id={props.id} className={props.class}>
        <a href={props.id} 
        onClick={()=> props.handleProjectPageChange("PortfolioSection")}
        >
        <h2>{props.title}</h2>
        </a>
      </section>
  );
};

export default PortfolioSection;
