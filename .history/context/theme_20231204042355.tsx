import React, { createContext, useEffect, useState } from "react";

type Props = {};
export type Theme = "light" | "dark";

const ThemeContext = createContext<Theme>("light");

function ThemeContextProvider({}: Props) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      if (theme === "dark") {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }

      if (theme === "light") {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    } else {
      const systemTheme: Theme =
        window.matchMedia("(prefers-color-scheme: dark)").matches === "dark"
          ? "dark"
          : "light";

      setTheme(systemTheme);
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return;
}

export default ThemeContextProvider;
