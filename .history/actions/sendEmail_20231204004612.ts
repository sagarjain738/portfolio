"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("senderMessage");
  const receiversMail = formData.get("senderMail");

  resend.emails.send({
    from: "sagarjain738@gmail.com",
    to: "sagarjain738@gmail.com",
    subject: "Testing",
    text: "Hello MF",
  });
};
