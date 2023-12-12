"use client";

import React, { createContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};
export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
};

const ThemeContext = createContext<Theme | null>(null);

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

export default ThemeContextProvider;
