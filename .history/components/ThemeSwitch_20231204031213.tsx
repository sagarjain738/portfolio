import React from "react";
import { BsSun } from "react-icons/bs";

type ThemeSwitchProps = {};

const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  return (
    <button className="absolute right-5 bottom-5">
      <BsSun fontSize="1.7rem" />
    </button>
  );
};
export default ThemeSwitch;
