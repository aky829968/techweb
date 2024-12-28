import nodemailer from "nodemailer";

function sendMail(email, otp) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASS,
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '" Techweb" <adityakumar262003@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Verify Account", // Subject line
      html: `<h2>OTP for account verfication</h2> <h1>${otp}</h1>`, // plain text body
    });

    // console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main().catch(console.error);
}
export default sendMail;
