"use client";

import {
  SectionName,
  useActiveContext,
} from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type hooksProps = {
  activeSection: SectionName;
  threshold: number;
};

export const useSectionInView = ({ activeSection, threshold }: hooksProps) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(activeSection);
    }
  }, [inView, timeOfLastClick, setActiveSection]);

  return {
    ref,
  };
};
