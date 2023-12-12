"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

type HeaderProps = {
  name: string;
};

// const header: React.FC<headerProps> = () => {

export default function Header({ name }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full "
        initial={{
          opacity: 0,
          y: -100,
          x: "-50%",
        }}
        animate={{
          opacity: 1,
          y: 0,
          x: "-50%",
        }}
      ></motion.div>

      {/* Nav Links */}
      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex justify-center items-center relative"
              key={link.hash}
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
            >
              <Link
                className={clsx(
                  `flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition-all`,
                  {
                    "text-gray-950": activeSection === link.name,
                  }
                )}
                onClick={() => setActiveSection(link.name)}
                href={link.hash}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10"
                    transition={{
                      delay: 1.7,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
