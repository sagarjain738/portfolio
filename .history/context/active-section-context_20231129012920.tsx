import { links } from "@/lib/data";
import { Dispatch, SetStateAction, createContext, useState } from "react";

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
