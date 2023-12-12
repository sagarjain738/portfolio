"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type ThemeSwitchProps = {};
type Theme = "light" | "dark";

const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
    }
  };

  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      if (theme === "dark") {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
      if (theme === "light") {
        setTheme("light");
        document.documentElement.classList.add("light");
      }
    } else {
      setTheme(
        window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  }, []);

  return (
    <button
      className="absolute right-5 bottom-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl rounded-full flex justify-center items-center hover:scale-110 active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};
export default ThemeSwitch;
