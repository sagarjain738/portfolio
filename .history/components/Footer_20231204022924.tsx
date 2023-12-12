import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col max-w-[45rem]">
      <small className="mx-auto">$copy; {new Date().getFullYear()}</small>
    </footer>
  );
};
export default Footer;
