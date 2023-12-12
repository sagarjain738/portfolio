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
        <div>
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

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{
              opacity: 0,
              scale: 0,
            }}
          >
            🔥
          </motion.span>
        </div>
      </div>
    </section>
  );
};
export default Intro;
