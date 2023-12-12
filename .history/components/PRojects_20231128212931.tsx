"use client";

import React, { Fragment, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SeactionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section>
      <SeactionHeading title="Projects" />
      <div>
        {projectsData.map((item, index) => (
          <Fragment key={index}>
            <Project {...item} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

type ProjectProps = (typeof projectsData)[number];

export default Projects;
