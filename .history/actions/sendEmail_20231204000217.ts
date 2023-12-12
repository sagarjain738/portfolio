const sendEmail = async (formData: FormData) => {
  "use server";
  console.log("Running on server");

  console.log(formData.get("senderMail"));
  console.log(formData.get("senderMessage"));
};
