import React from "react";
import "../../index.css";

const SummarySection = ({ className, id, title, content }) => {
  if (typeof content === "string") {
    return (
      <div id={id}>
        <h3>{title}</h3>
        <p> {content}</p>
      </div>
    );
  } else {
    const listItem = content.map((item, index) => <li id={index}>{item}</li>);

    return (
      <div id={id} className={className}>
        <h3>{title}</h3>
        <ul>
          {listItem}
        </ul>
      </div>
    );
  }
};

export default SummarySection;
