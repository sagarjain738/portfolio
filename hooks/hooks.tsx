"use client";

import {
  SectionName,
  useActiveContext,
} from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type hooksProps = {
  activeSection: SectionName;
  threshold?: number;
  triggerOnce?: boolean;
};

export const useSectionInView = ({
  activeSection,
  threshold = 0.75,
  triggerOnce = false,
}: hooksProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });
  const { setActiveSection, timeOfLastClick } = useActiveContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(activeSection);
    }
  }, [inView, timeOfLastClick, setActiveSection, activeSection]);

  return {
    ref,
    triggerOnce,
    inView,
  };
};
