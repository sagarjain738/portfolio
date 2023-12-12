"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export function Project({ description, imageUrl, tags, title }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.20 1"],
    // in offset first item is for starting the animation & second is when to stop it.
    // in above offset "0 1" 0 means end of viewport & start of the element mentioned in target
    // in above offset "0 1" 1.33 means 0.33% of viewport & start of the element mentioned in target
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // Here the scrollYProgress will go from 0 to 1 but it will start from 0.8 & then it will go to 1
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  // Here the scrollYProgress will go from 0 to 1 but it will start from 0.6 & then it will go to 1

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      <section className="bg-gray-100 hover:bg-gray-200 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] transition group-even:pl-1 rounded-lg dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full flex flex-col sm:group-even:ml-[19rem]">
          {/* Title/ */}
          <h3 className="text-2xl font-semibold">{title}</h3>

          {/* Project Details */}
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          {/* Technologies Used for Project */}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto ">
            {tags?.map((tag, i) => {
              return (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-widest text-white rounded-full dark:text-white/70"
                  key={i}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Images */}
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] group-even:right-[initial] group-even:-left-36 
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
      </section>
    </motion.div>
  );
}

export default Project;
