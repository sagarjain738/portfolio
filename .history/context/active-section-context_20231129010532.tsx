import { Dispatch, SetStateAction, createContext, useState } from "react";

type contextProps = {
  activeSection: string;
  setActiveSection?: Dispatch<SetStateAction<string>>;
};

const section = createContext<contextProps>({ activeSection: "Home" });

export default function SectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <section.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </section.Provider>
  );
}
