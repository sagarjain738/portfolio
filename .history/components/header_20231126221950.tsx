"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

type HeaderProps = {
    name: string;
};

// const header: React.FC<headerProps> = () => {

function Header({ name }: HeaderProps) {
    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full "
                initial={{
                    opacity: 0,
                    y: -100,
                    x: "-50%"
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    x: "-50%"
                }}
            ></motion.div>
            <nav className="flex  items-center fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex justify-between items-center bg-red-200 h-full w-full">
                    {
                        links.map((link, index) => (
                            <li key={link.hash}>
                                <Link href={link.hash}>
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}
export default Header;
