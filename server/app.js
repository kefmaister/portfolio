const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // Your email service
  auth: {
    user: process.env.MAIL_USER, // Your email
    pass: process.env.MAIL_PASS, // Your email password
  },
});

const sendMail = (mailOptions) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;
    const mailOptions = {
      from: 'portfolio@contact.com',
      to,
      subject,
      text,
    };
  
    sendMail(mailOptions);
    res.send('Email sent successfully');
  });