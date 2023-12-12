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
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      {/* Technologies Used for Project */}
      <ul className="flex flex-wrap mt-4 gap-2">
        <li>
          {tags?.map((tag, i) => {
            return (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-widest text-white rounded-full"
                key={i}
              >
                {tag}
              </li>
            );
          })}
        </li>
      </ul>
      <Image src={imageUrl} alt={title} quality={95} />
    </section>
  );
}

export default Projects;
