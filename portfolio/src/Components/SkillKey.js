import React from "react";

const SkillKey = ({text, color}) => {
    
  return (
    <span className={`skillKeyItem ${color}`} >
      <span className={text}></span>
      <span>{text}</span>
    </span>
  );
};

export default SkillKey;
