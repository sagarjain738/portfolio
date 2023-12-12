"use client";
import { projectsData } from "@/lib/data";
import React, { Fragment, useEffect } from "react";
import Project from "./Project";
import SeactionHeading from "./section-heading";
import { useActiveContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/hooks/hooks";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  const { ref } = useSectionInView("Projects", 0.35);

  // const { ref, inView } = useInView({
  //   threshold: 0.35,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Projects");
  //   }
  // }, [inView, timeOfLastClick, setActiveSection]);

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
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

export default Projects;
