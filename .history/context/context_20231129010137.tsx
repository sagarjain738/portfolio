import { createContext, useState } from "react";

const section = createContext(null);

export default function SectionContextProvider() {
  const [activeSection, setActiveSection] = useState("Home");
}
