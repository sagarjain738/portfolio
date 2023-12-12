import React from "react";
import SeactionHeading from "./section-heading";

type Props = {};

function Contact({}: Props) {
  return (
    <section id="contact">
      <SeactionHeading title="Contact Me" />
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sagarjain738@gmail.com">
          Sagarjain738@gmail.com
        </a>{" "}
        Or through this form
      </p>
    </section>
  );
}

export default Contact;
