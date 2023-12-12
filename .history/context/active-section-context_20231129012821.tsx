import { links } from "@/lib/data";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection?: Dispatch<SetStateAction<SectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: "Home",
});

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
