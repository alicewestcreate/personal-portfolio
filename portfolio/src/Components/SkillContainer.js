import React from "react";
import SkillKey from "./SkillKey";

const SkillContainer = ({ skills }) => {
  const listOfSkills = skills.map((skill) => {
    return <SkillKey text={skill}></SkillKey>;
  });

  return <section className={"skillContainer"}>{listOfSkills}</section>;
};

export default SkillContainer;
