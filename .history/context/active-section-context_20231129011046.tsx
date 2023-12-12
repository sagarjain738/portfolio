import { links } from "@/lib/data";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type contextProps = {
  activeSection: string;
  setActiveSection?: Dispatch<SetStateAction<string>>;
};

const section = createContext<contextProps>({ activeSection: "Home" });

export default function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] =
    useState<(typeof links)[number]["name"]>("Home");

  return (
    <section.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </section.Provider>
  );
}
