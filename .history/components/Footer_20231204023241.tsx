import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="max-w-[45rem] text-center bg-red-100">
      <small className="mx-auto">
        &copy; {new Date().getFullYear()} Sagar Jain. All Rights Reserved
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};
export default Footer;
