import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mb-10 text-gray-500">
      <small className="mb-2 block text-sm">
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
