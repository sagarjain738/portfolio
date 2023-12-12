"use client";
import Image from "next/image";
import React from "react";
import Me from "/public/me.jpg";
import { motion } from "framer-motion";

type IntroProps = {};

const Intro: React.FC<IntroProps> = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="relative">
          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Me}
              alt="Sagar Jain"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 object-cover border-[0.35rem] border-white rounded-full shadow-xl"
            />
          </motion.div>

          {/* Emoji */}
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 0,
              duration: 0.7,
            }}
          >
            🔥
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Ricardo.`}</span> {`I'm a`}
        <span className="font-bold">{`full-stack developer`}</span> {`with`}
        <span className="font-bold">{`8 years`}</span>{" "}
        {`of experience. I enjoy`}
        {` building `}
        <span className="italic">{`sites & apps`}</span>. {`My focus is`}
        <span className="underline">{`React (Next.js)`}</span>.
      </motion.h1>
    </section>
  );
};
export default Intro;
