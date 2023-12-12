"use client";
import { useSectionInView } from "@/hooks/hooks";
import { projectsData } from "@/lib/data";
import React, { Fragment } from "react";
import Project from "./Project";
import SeactionHeading from "./section-heading";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  const { ref } = useSectionInView({
    activeSection: "Projects",
    threshold: 0.35,
  });

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
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
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
