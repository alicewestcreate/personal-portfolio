import React from "react";

const PortfolioSection = (props) => {
  return (
      <section id={props.id} className={props.class}>
        <h2>{props.title}</h2>
      </section>
  );
};

export default PortfolioSection;
