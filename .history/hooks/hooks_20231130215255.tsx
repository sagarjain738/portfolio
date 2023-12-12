"use client";

import {
  SectionName,
  useActiveContext,
} from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type hooksProps = {
  activeSection: SectionName;
  threshould: number;
};

export const useSectionInView = ({ activeSection, threshould }: hooksProps) => {
  const { ref, inView } = useInView({
    threshold: threshould,
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
