import React, { useState } from "react";
import { BsSun } from "react-icons/bs";

type ThemeSwitchProps = {};

const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  const [] = useState<"light" | "dark">("light");
  return (
    <button className="absolute right-5 bottom-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl rounded-full flex justify-center items-center hover:scale-110 active:scale-105 transition-all">
      <BsSun />
    </button>
  );
};
export default ThemeSwitch;
