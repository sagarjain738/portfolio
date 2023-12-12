"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";
import SeactionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <motion.section>
      <SeactionHeading title="Projects" />
      <div>
        {projectsData.map((item, index) => (
          <Fragment key={index}>
            <Project {...item} />
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
};

type ProjectProps = (typeof projectsData)[0];

function Project({}: ProjectProps) {}

export default Projects;
