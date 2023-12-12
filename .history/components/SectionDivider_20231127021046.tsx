import { motion } from "framer-motion";
import React from "react";

type SectionDividerProps = {};

const SectionDivider: React.FC<SectionDividerProps> = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
      }}
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
    ></motion.div>
  );
};
export default SectionDivider;
