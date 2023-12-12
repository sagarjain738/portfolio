import React from "react";
import SeactionHeading from "./section-heading";
import { skillsData } from "@/lib/data";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section
      id="skills"
      className="mb-28rem sm:mb-40 scroll-mt-28 max-w-[53rem] flex flex-col"
    >
      <SeactionHeading title="My Skills" />
      {
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill) => (
            <li
              key={skill}
              className="py-2 px-5 bg-white border border-black/[0.1] rounded-xl"
            >
              {skill}
            </li>
          ))}
        </ul>
      }
    </section>
  );
};
export default Skills;