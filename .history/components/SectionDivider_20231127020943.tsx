import { motion } from "framer-motion";
import React from "react";

type SectionDividerProps = {};

const SectionDivider: React.FC<SectionDividerProps> = () => {
  return (
    <motion.div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"></motion.div>
  );
};
export default SectionDivider;
