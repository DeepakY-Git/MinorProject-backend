import nodeMailer from "nodemailer";

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    //Should be in env file
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "email@gmail.com",
      pass: "password",
    },
    service: "gmail",
  });

  const mailOptions = {
    from: "email@gmail.com",
    //from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
export default sendEmail;

//Can also use mailtrap as google can create some problem