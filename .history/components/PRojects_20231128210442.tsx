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
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative mb-3 sm:mb-8 last:mb-0 sm:h-[20rem] group even:pl-12">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full flex flex-col group-even:ml-[18rem]">
        {/* Title/ */}
        <h3 className="text-2xl font-semibold">{title}</h3>

        {/* Project Details */}
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>

        {/* Technologies Used for Project */}
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
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
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] group-even:right-[initial] group-even:-left-36 "
      />
    </section>
  );
}

export default Projects;
