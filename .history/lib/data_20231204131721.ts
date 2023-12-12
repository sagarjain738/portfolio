import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import airbnb from "@/public/airbnb.png";
import reddit from "@/public/reddit.png";
import security from "@/public/security.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "Chandwad, Maharashtra",
    description:
      "I have completed my Bachelor's degree in 2016 in a Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Digital Marketing",
    location: "Pune, Maharashtra",
    description:
      "Initially i have started working as a Digital marketing associate at PrudourPvt Ltd in Pune.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnb",
    description: "I have developed this clone during my learning of React.",
    tags: ["React", "MongoDB", "Node.js", "Express"],
    imageUrl: airbnb,
  },
  {
    title: "Truck Security",
    description:
      "Here i have developed this App for my current organization Honeywell, This will be provided for many 3rd party organization's like BPCL, HPCL, IOCL, Reliance & Adani ",
    tags: ["Next.js", "Chakra UI", "Material-UI- Grid"],
    imageUrl: security,
  },
  {
    title: "Word Analytics",
    description: "Reddit clone developed during my learning of Firebase ",
    tags: ["React", "Next.js", "Firebase", "Chakra-UI", "Recoil"],
    imageUrl: reddit,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "C#",
  ".Net",
  "MongoDB",
  "SQL Server",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
