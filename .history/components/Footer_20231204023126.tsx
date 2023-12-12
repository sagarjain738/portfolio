import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="max-w-[45rem] text-center bg-red-100">
      <small className="mx-auto">
        &copy; {new Date().getFullYear()} Sagar Jain. All Rights Reserved
      </small>
    </footer>
  );
};
export default Footer;
