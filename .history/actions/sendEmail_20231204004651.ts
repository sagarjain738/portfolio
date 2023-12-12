"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("senderMessage");
  const senderMail = formData.get("senderMail");

  resend.emails.send({
    from: senderMail,
    to: "sagarjain738@gmail.com",
    subject: "Testing",
    text: message,
  });
};
