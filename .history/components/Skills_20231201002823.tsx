"use client";

import React from "react";
import SeactionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  const { ref } = useSectionInView({
    activeSection: "Skills",
    threshold: 0.9,
  });

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28rem sm:mb-40 scroll-mt-28 max-w-[53rem] flex flex-col"
    >
      <SeactionHeading title="My Skills" />
      {
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill) => (
            <li
              key={skill}
              className="py-3 px-5 bg-white border border-black/[0.1] rounded-xl"
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
