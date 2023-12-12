import React from "react";
import SeactionHeading from "./section-heading";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section id="skills" className="scroll-mt-28">
      <SeactionHeading title="My Skills" />
    </section>
  );
};
export default Skills;
