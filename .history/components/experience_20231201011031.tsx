import React from "react";
import SeactionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type ExperienceProps = {};

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <section id="experience">
      <SeactionHeading title="Experience" />
    </section>
  );
};
export default Experience;
