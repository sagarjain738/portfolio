"use client";
import React from "react";
import SeactionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { sendEmail } from "@/actions/sendEmail";

type Props = {};

function Contact({}: Props) {
  const { inView, ref } = useSectionInView({
    activeSection: "Contact",
    threshold: 0.6,
  });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SeactionHeading title="Contact Me" />

      {/* Contact Me info */}
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sagarjain738@gmail.com">
          Sagarjain738@gmail.com
        </a>{" "}
        Or through this form
      </p>

      {/* Form */}
      <form
        className="mt-10 flex flex-col gap-5"
        action={async (formData) => {
          // Error Handling
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10 first-letter:
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:text-black dark:outline-none
          "
          type="email"
          placeholder="Your Email"
          required
          name="senderMail"
          maxLength={40}
        />

        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:text-black dark:outline-none
          "
          placeholder="Your message"
          required
          name="senderMessage"
          maxLength={300}
        />
        <button
          type="submit"
          className="group mx-auto flex justify-center items-center gap-5 border h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-110 active:scale-110 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className=" group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all" />
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
