import React from "react";
import { BsSun } from "react-icons/bs";

type ThemeSwitchProps = {};

const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  return (
    <button className="absolute right-5 bottom-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl">
      <BsSun fontSize="1.7rem" />
    </button>
  );
};
export default ThemeSwitch;
