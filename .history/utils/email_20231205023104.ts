const nodemailer = require("nodemailer");
const pug = require("pug");
const path = require("path");
const htmlToText = require("html-to-text");

type User = {
  email: string;
};

type EmailType = {};

export class Email {
  constructor(user: User, url: string) {
    this.to = user.email;
    this.url = url;
    this.from = `Sagar Jain <${process.env.EMAIL_FROM}>`;
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

  async send(template: string, subject) {
    // 1. Render HTML based on a PUG Template
    // Usually re.render method will Create the HTML & sends it to client but here we want to send
    // Email, so here we will create HTML & send that HTML as Email.

    const html = pug.renderFile(
      `${path.join(__dirname, "..", "views", `/email/${template}.pug`)}`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      }
    );

    // 2. Define Email Options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html, {
        wordwrap: 150,
      }),
    };

    // 3. Create a Transport & Send Email.
    await this.creatingTransport().sendMail(mailOptions);
  }
}
