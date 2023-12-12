import React from "react";
import SeactionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

type Props = {};

function Contact({}: Props) {
  return (
    <section id="contact" className="mb-28 scroll-mt-28 w-[min(100%,38rem)]">
      <SeactionHeading title="Contact Me" />
      {/* Contact Me info */}
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sagarjain738@gmail.com">
          Sagarjain738@gmail.com
        </a>{" "}
        Or through this form
      </p>
      {/* Form */}
      <form className="mt-10 flex flex-col gap-10">
        <input
          className="h-14 roundel-lg border border-black/10"
          type="email"
        />
        <textarea className="h-52 my-3 rounded-lg border border-black/10 p-4" />
        <button
          type="submit"
          className="flex justify-center items-center gap-5 border h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all"
        >
          Submit <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}

export default Contact;
