import { links } from "@/lib/data";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type props = {
  children: React.ReactNode;
};

type contextProps = {
  activeSection: string;
  setActiveSection?: Dispatch<SetStateAction<string>>;
};

type activeSection = (typeof links)[number]["name"];

const section = createContext<contextProps>({ activeSection: "Home" });

export default function ActiveSectionContextProvider({ children }: props) {
  const [activeSection, setActiveSection] = useState<>("Home");

  return (
    <section.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </section.Provider>
  );
}
