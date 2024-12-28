import nodemailer from "nodemailer";
export const sendQueryMail = async (req, res) => {
  let { name, phone, email, query } = req.body;
  if (!email || !name || !phone || !query) {
    return res
      .status(400)
      .json({ message: "All feilds are required", success: false });
  }
  await sendMail(name, email, query, phone);
  return res
    .status(200)
    .json({ message: "email send succeefully", success: true });
};

function sendMail(name, email, query, phone) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "adityakumar262003@gmail.com",
      pass: "kanr nahe xknu fcom",
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${email}`, // sender address
      to: "aky829968@gmail.com", // list of receivers
      subject: "Query Form", // Subject line
      text: ` Name : ${name} \n Phone : ${phone}\n Email : ${email} \n Query : ${query}`, // plain text body
      // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main().catch(console.error);
}
