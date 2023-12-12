"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export function Project({ description, imageUrl, tags, title }: ProjectProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
    // in offset first item is for starting the animation & second is when to stop it.
    // in above offset "0 1" 0 means end of viewport & start of the element mentioned in target
    // in above offset "0 1" 1.33 means 0.33% of viewport & start of the element mentioned in target
  });

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative mb-3 sm:mb-8 last:mb-0 sm:h-[20rem] group even:pl-12 hover:bg-gray-200 transition"
    >
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
        className="absolute top-8 -right-40 w-[28.25rem] group-even:right-[initial] group-even:-left-36 
              group-hover:scale-[1.04]
      
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2
      
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2
      
              transition
              "
      />
    </motion.section>
  );
}

export default Project;
