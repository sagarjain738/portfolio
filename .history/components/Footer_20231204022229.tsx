import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <small>$copy; {new Date().getFullYear()}</small>
    </footer>
  );
};
export default Footer;
