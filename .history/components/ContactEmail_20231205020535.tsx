import React from "react";
import nodemailer from "nodemailer";

type ContactEmailProps = {
  message: string;
};

const ContactEmail: React.FC<ContactEmailProps> = ({ message }) => {
  return <div>Have a good coding</div>;
};
export default ContactEmail;
