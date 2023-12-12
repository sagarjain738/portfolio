import { projectsData } from "@/lib/data";
import React, { Fragment } from "react";
import Project from "./Project";
import SeactionHeading from "./section-heading";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section id="projects">
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
