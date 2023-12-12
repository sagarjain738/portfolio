"use client";
import React from "react";
import SeactionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./SubmitButton";
import toast from "react-hot-toast";

type Props = {};

function Contact({}: Props) {
  const { inView, ref } = useSectionInView({
    activeSection: "Contact",
    threshold: 0.6,
  });

  const { pending } = useFormStatus();

  const handleSendMail = async (formData: FormData) => {
    // Error Handling
    const result = await sendEmail(
      formData.get("senderMail") as string,
      formData.get("senderMessage") as string
    );
    console.log("Result", result);

    if (result.accepted.length > 0) {
      toast.success("Email sent successfully!");
      return;
    }
    if (result.rejected.length > 0) {
      toast.error("Mail sent Failed, Please try again");
      return;
    }
  };

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
      <form className="mt-10 flex flex-col gap-5" action={handleSendMail}>
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
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
