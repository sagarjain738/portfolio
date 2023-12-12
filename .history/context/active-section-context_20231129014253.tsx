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

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection?: Dispatch<SetStateAction<SectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({ children }: Props) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveContext = () => {
  const result = useContext(ActiveSectionContext);
  return result;
};
