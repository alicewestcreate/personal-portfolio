import React from "react";

const SkillKey = ({text}) => {
    
  return (
    <span className="skillKeyItem">
      <span className={text}></span>
      <span>{text}</span>
    </span>
  );
};

export default SkillKey;
