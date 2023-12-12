"use client";

import React from "react";
import { motion } from "framer-motion";
import SeactionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <motion.section>
      <SeactionHeading title="Projects" />
      <div>
        {projectsData.map((item) => (
          <Project />
        ))}
      </div>
    </motion.section>
  );
};

type ProjectProps = {
  title: string;
  readonly description: string;
  readonly tags: readonly [string];
  readonly imageUrl: "";
};

function Project() {}

export default Projects;
