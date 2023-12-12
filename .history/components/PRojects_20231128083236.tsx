"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";
import SeactionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

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

type ProjectProps = (typeof projectsData)[number];

export function Project({ description, imageUrl, tags, title }: ProjectProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        <li>
          {tags?.map((tag, i) => {
            return <li key={i}>{tag}</li>;
          })}
        </li>
      </ul>
      <Image src={imageUrl} alt={title} quality={95} />
    </section>
  );
}

export default Projects;
