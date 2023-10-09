const nodemailer = require("nodemailer");
const { SMTP_EMAIL, SMTP_EMAIL_PASS } = require("../secret");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_EMAIL_PASS,
  },
});

exports.emailWithNodeMailer = async (emailData) => {
  try {
    const mailOptions = {
      from: SMTP_EMAIL,
      to: emailData.email,
      subject: emailData.subject,
      html: emailData.html,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
};
