"use server";

import React from "react";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import pug from "pug";
import path from "path";
import htmlToText from "html-to-text";
import { render } from "@react-email/render";
import ContactEmail from "@/components/ContactEmail";

type User = {
  email: string;
};

class Email {
  constructor() {
    // this.to = `Sagar Jain <${process.env.EMAIL_FROM}>`;
    // this.url = url;
    // this.from = user.email;
  }

  creatingTransport() {
    return nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.BREVO_USEREMAIL,
        pass: process.env.BREVO_USERPASSWORD,
      },
    });

    if (process.env.NODE_ENV === "production") {
      return nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: process.env.BREVO_USEREMAIL,
          pass: process.env.BREVO_USERPASSWORD,
        },
      });
    } else {
      return nodemailer.createTransport({
        // service: 'Gmail',
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    }
  }

  async send(senderMail: string) {
    // 1. Render HTML based on a PUG Template
    // Usually req.render method will Create the HTML & sends it to client but here we want to send
    // Email, so here we will create HTML & send that HTML as Email.

    // const html = pug.renderFile(`@/public/welcome.pug`, {
    //   firstName: senderMail.split("@")[0],
    //   url: "www.google.com",
    //   subject: "Thank you for contacting !",
    // });

    // const html = render(ContactEmail, {
    //   pretty: true,
    // });

    // 2. Define Email Options
    const mailOptions = {
      from: senderMail,
      to: process.env.EMAIL_FROM,
      subject: `${senderMail.split("@")[0]} have checked your profile`,
      React: React.createElement(ContactEmail),
    };

    // 3. Create a Transport & Send Email.
    await this.creatingTransport().sendMail(mailOptions);
  }
}

export const sendEmail = async (userMail: string) => {
  const sendEmailOfSignup = await new Email().send(userMail);
  return sendEmailOfSignup;
};

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEmail = async (formData: FormData) => {
//   const message = formData.get("senderMessage");
//   const senderMail = formData.get("senderMail");

//   if (!message || typeof message !== "string") {
//     return {
//       error: "Invalid Message",
//     };
//   }

//   if (!senderMail || typeof senderMail !== "string") {
//     return {
//       error: "Invalid Message",
//     };
//   }

//   resend.emails.send({
//     from: senderMail,
//     to: "sagarjain738@gmail.com",
//     subject: "Testing",
//     text: message,
//   });
// };