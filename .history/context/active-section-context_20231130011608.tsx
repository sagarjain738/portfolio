"use client";

import { links } from "@/lib/data";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Props = {
  children: React.ReactNode;
};

export type SectionName = (typeof links)[number]["name"];

// Context Type
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

// Context Creation
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({ children }: Props) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveContext = () => {
  const result = useContext(ActiveSectionContext);

  if (result === null)
    throw new Error(
      "useActiveSectionCOntext must be used within a ActiveSectionContextProvider"
    );
  return result;
};
