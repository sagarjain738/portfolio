import React from "react";
import SeactionHeading from "./section-heading";

type Props = {};

function Contact({}: Props) {
  return (
    <section id="contact" className="mb-28 scroll-mt-28 w-[min(100%,38rem)]">
      <SeactionHeading title="Contact Me" />
      {/* Contact Me info */}
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sagarjain738@gmail.com">
          Sagarjain738@gmail.com
        </a>{" "}
        Or through this form
      </p>
      {/* Form */}
      <form>
        <input type="email" />
        <textarea />
        <button type="submit"></button>
      </form>
    </section>
  );
}

export default Contact;
