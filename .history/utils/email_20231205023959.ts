const nodemailer = require("nodemailer");
const pug = require("pug");
const path = require("path");
const htmlToText = require("html-to-text");

type User = {
  email: string;
};

type EmailType = {};

class Email {
  constructor(user: User, url: string) {
    this.to = `Sagar Jain <${process.env.EMAIL_FROM}>`;
    this.url = url;
    this.from = user.email;
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

  async send() {
    // 1. Render HTML based on a PUG Template
    // Usually re.render method will Create the HTML & sends it to client but here we want to send
    // Email, so here we will create HTML & send that HTML as Email.

    const html = pug.renderFile(`${path.join(__dirname, `/welcome.pug`)}`, {
      firstName: this.email.split("@")[0],
      url: "www.google.com",
      subject: "Thank you for contacting !",
    });

    // 2. Define Email Options
    const mailOptions = {
      from: this.from,
      to: process.env.EMAIL_FROM,
      subject: ``,
      html,
      text: htmlToText.convert(html, {
        wordwrap: 150,
      }),
    };

    // 3. Create a Transport & Send Email.
    await this.creatingTransport().sendMail(mailOptions);
  }
}
