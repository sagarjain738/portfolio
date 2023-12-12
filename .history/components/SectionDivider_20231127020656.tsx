import React from "react";

type SectionDividerProps = {};

const SectionDivider: React.FC<SectionDividerProps> = () => {
  return (
    <div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"></div>
  );
};
export default SectionDivider;
