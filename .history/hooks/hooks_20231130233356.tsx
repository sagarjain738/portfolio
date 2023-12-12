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

export const useSectionInView = ({
  activeSection,
  threshold = 0.75,
}: hooksProps) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(activeSection);
    }
  }, [inView, timeOfLastClick, setActiveSection, activeSection]);

  return {
    ref,
  };
};
