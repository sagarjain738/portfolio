"use client"
import React from "react";
import { motion } from "framer-motion";

type HeaderProps = {
    name: string;
};

// const header: React.FC<headerProps> = () => {

function Header({ name }: HeaderProps) {
    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
            ></motion.div>
        </header>
    );
}
export default Header;
