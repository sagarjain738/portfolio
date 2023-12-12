import { links } from "@/lib/data";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ActiveSection = (typeof links)[number]["name"];

type ActiveSectionContextType = {
  activeSection: ActiveSection;
  setActiveSection?: Dispatch<SetStateAction<string>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: "Home",
});

export default function ActiveSectionContextProvider({ children }: Props) {
  const [activeSection, setActiveSection] = useState<ActiveSection>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
