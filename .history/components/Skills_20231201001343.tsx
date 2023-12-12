import React from "react";
import SeactionHeading from "./section-heading";
import { skillsData } from "@/lib/data";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section
      id="skills"
      className="mb-28rem scroll-mt-28 max-w-[53rem] flex flex-col"
    >
      <SeactionHeading title="My Skills" />
      {
        <ul className="flex flex-wrap">
          {skillsData.map((skill) => (
            <li key={skill} className="py-2 px-5 bg-gray-400 m-4 rounded-lg">
              {skill}
            </li>
          ))}
        </ul>
      }
    </section>
  );
};
export default Skills;