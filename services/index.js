const nodemailer = require("nodemailer");

const sendMail = (email, subject, body) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "connecttokrishnanow@gmail.com",
      pass: "krishna1122@"
    }
  });
  transporter
    .sendMail({
      from: 'connecttokrishnanow@gmail.com', // sender address
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
