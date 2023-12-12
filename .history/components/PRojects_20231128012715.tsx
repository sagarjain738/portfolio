import React from "react";
import { motion } from "framer-motion";
import SeactionHeading from "./section-heading";

type PRojectsProps = {};

const PRojects: React.FC<PRojectsProps> = () => {
  return (
    <motion.section>
      <SeactionHeading title="Projects" />
    </motion.section>
  );
};
export default PRojects;
