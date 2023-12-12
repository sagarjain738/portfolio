"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");

  console.log(formData.get("senderMail"));
  console.log(formData.get("senderMessage"));
};
