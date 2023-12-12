"use client";
import Image from "next/image";
import React from "react";
import Me from "/public/me.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

type IntroProps = {};

const Intro: React.FC<IntroProps> = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      {/* Photo & Emoji */}
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

      {/* Description */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Sagar Jain.`}</span> {`I'm a `}
        <span className="font-bold">{`full-stack developer`}</span> {`with `}
        <span className="font-bold">{`5 years`}</span>
        {` of experience. I enjoy building sites & Web apps`}
        <span className="italic">{``}</span>. {`My focus is `}
        <span className="underline">{`React (Next.js)`}</span>.
      </motion.h1>

      {/* Contact Me, Download CV & Social Sites Links */}
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-lg font-medium"
      >
        {/* Contact Me */}
        <Link
          href={"#contact"}
          className="group bg-gray-950 text-white px-7 py-3 flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-100 transition-all"
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition-all" />
        </Link>

        {/* Download CV */}
        <a
          href={"#contact"}
          className="group text-gray-950 bg-white px-7 py-3 flex justify-center items-center gap-2 rounded-full shadow-2xl
          outline-none focus:scale-110 hover:scale-110 active:scale-100 transition-all
          "
        >
          Download CV{" "}
          <HiDownload className=" opacity-60 group-hover:translate-y-1 transition-all" />
        </a>

        {/* Linked-In */}
        <a className="cursor-pointer text-gray-700 text-2xl bg-white p-4 flex justify-center items-center gap-2 rounded-full shadow-2xl font-bold ">
          <BsLinkedin />
        </a>

        {/* Git Hub */}
        <a className="cursor-pointer text-gray-700 text-2xl bg-white p-4 flex justify-center items-center gap-2 rounded-full shadow-2xl font-bold ">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
export default Intro;
