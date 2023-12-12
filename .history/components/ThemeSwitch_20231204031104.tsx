import React from "react";
import { BsSun } from "react-icons/bs";

type ThemeSwitchProps = {};

const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  return (
    <button>
      <BsSun />
    </button>
  );
};
export default ThemeSwitch;
