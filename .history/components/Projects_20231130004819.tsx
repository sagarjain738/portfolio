"use client";
import { projectsData } from "@/lib/data";
import React, { Fragment, useEffect } from "react";
import Project from "./Project";
import SeactionHeading from "./section-heading";
import { useActiveContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  const { ref, inView } = useInView();

  const { setActiveSection } = useActiveContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView]);

  return (
    <section id="projects" className="scroll-mt-28">
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