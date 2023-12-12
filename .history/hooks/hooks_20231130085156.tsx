"use client";

import { useActiveContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type hooksProps = {};

export const useSectionInView: React.FC<hooksProps> = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, timeOfLastClick, setActiveSection]);

  return {
    ref,
  };
};
