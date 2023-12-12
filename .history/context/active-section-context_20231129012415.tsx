import { links } from "@/lib/data";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection?: Dispatch<SetStateAction<string>>;
};

type ActiveSection = (typeof links)[number]["name"];

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
