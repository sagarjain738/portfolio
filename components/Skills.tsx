"use client";

import React from "react";
import SeactionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";

type SkillsProps = {};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills: React.FC<SkillsProps> = () => {
  const { ref } = useSectionInView({
    activeSection: "Skills",
    threshold: 1,
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
          {skillsData.map((skill, inx) => (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={inx}
              key={skill}
              className="py-3 px-5 bg-white border border-black/[0.1] rounded-xl dark:bg-white/10 dark:text-white/80"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      }
    </section>
  );
};
export default Skills;
