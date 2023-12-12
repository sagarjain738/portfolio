import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="max-w-[45rem] text-center">
      <small className="mx-auto">&copy; {new Date().getFullYear()}</small>
    </footer>
  );
};
export default Footer;
