import React from "react";
import SeactionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

type ExperienceProps = {};

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <section id="experience">
      <SeactionHeading title="Experience" />
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement key={index}></VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default Experience;
