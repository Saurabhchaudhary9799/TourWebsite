const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // 1. Create a transporter
  const transporter = nodemailer.createTrnasport({
    host: process.env.EMAIL_HOST,
    post: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // 2. define Email options
  const mailOptions = {
    from: "Harmeet Singh <harmeetsinghfbd@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.text,
  };

  // 3. Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
