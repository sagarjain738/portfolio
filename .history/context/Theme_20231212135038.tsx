"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeContextProvider({ children }: Props) {
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
    // console.log("Theme Setting using useEffect");

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
      const systemTheme: Theme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";

      setTheme(systemTheme);
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const result = useContext(ThemeContext);

  if (result === null)
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  return result;
};

export default ThemeContextProvider;
