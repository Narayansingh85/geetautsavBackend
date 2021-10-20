const nodemailer = require("nodemailer");
const { spassword, semail } = require("../config/keys");

const sendMail = (email, subject, body) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: semail,
      pass: spassword
    }
  });
  transporter
    .sendMail({
      from: semail, // sender address
      to: email, // list of receivers
      subject: subject, // Subject linegit add
      html: body // html body
    })
    .then(info => {
      console.log({ info });
    })
    .catch(console.error);
};

module.exports = {
  sendMail
};
