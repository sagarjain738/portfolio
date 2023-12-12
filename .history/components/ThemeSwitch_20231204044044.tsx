"use client";
import { useTheme } from "@/context/Theme";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type ThemeSwitchProps = {};

const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed right-5 bottom-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl rounded-full flex justify-center items-center hover:scale-110 active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};
export default ThemeSwitch;
