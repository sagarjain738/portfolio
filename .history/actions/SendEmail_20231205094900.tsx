"use server";

import ContactEmail from "@/components/ContactEmail";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

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

  async send(senderMail: string, senderMessage: string) {
    try {
      // 1. Create a React component for Mail
      const html = render(
        <ContactEmail message={senderMessage} senderEmail={senderMail} />
      );

      // 2. Define Email Options
      const mailOptions = {
        from: senderMail,
        to: process.env.EMAIL_FROM,
        subject: `${senderMail.split("@")[0]} have checked your profile`,
        html,
      };

      // 3. Create a Transport & Send Email.
      const result = await this.creatingTransport().sendMail(mailOptions);
      return result;
    } catch (error) {
      throw new Error("Error in sending Mail, Sending Mail Failed");
    }
  }
}

export const sendEmail = async (userMail: string, senderMessage: string) => {
  try {
    const sendEmailOfSignup = await new Email().send(userMail, senderMessage);
    return sendEmailOfSignup;
  } catch (error) {
    throw new Error("Error in sending Mail, Sending Mail Failed");
  }
};
