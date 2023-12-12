"use client";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";
import React from "react";
import SeactionHeading from "./section-heading";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  const { ref } = useSectionInView({ activeSection: "About", threshold: 0.75 });

  // const { ref, inView } = useInView({
  //   threshold: 0.75,
  // });

  // const { setActiveSection, timeOfLastClick } = useActiveContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("About");
  //   }
  // }, [inView, timeOfLastClick, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center sm:mb-40 leading-6 scroll-mt-28"
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      {/* About Me 1st Para*/}
      <SeactionHeading title="About Me" />
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">
          Computer Science from Pune University
        </span>
        , I decided to pursue my passion for programming. I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My journey in
        software development has equipped me with a keen understanding of both
        front-end and back-end technologies, allowing me to seamlessly bridge
        the gap between design and functionality. My core stack is{" "}
        <span className="font-medium">
          MERN stack (MongoDB, Express.js, React.js, Node.js)
        </span>
        . I am also familiar with TypeScript, C#, .NET & SQLServer. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      {/* About Me 2md Para*/}
      <p>
        <span className="italic">{`When I'm not coding`}</span>, I enjoy playing
        video games, watching movies, Listening Music and Travelling. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-medium">Mix Martail Arts</span>.{" "}
        {`I'm also
        learning how to play the guitar.`}
      </p>
    </motion.section>
  );
};
export default About;
