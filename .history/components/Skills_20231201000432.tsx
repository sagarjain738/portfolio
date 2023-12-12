import React from "react";
import SeactionHeading from "./section-heading";
import { skillsData } from "@/lib/data";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section id="skills" className="scroll-mt-28">
      <SeactionHeading title="My Skills" />
      {
        <ul className="flex flex-wrap max-w-[30rem]">
          {skillsData.map((skill) => (
            <li key={skill} className="py-2 px-4 bg-gray-400 m-2">
              {skill}
            </li>
          ))}
        </ul>
      }
    </section>
  );
};
export default Skills;
