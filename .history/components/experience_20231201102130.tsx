"use client";

import React from "react";
import SectionHeading from "./section-heading";
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
      <SectionHeading title="Experience" />
      <VerticalTimeline>
        {experiencesData.map((item, index) => {
          return (
            <div key={index}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "red",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.location}</p>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};
export default Experience;
