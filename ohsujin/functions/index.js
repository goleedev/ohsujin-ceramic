const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
/**  * using gmail with nodemailer  */

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ssjj2468@gmail.com",
    pass: "osos8582",
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors()(req, res, () => {
    // getting dest email by query string
    const email = req.query.email;
    const name = req.query.name;
    const file = req.query.file;
    const options = req.query.options;
    const message = req.query.message;
    const mailOptions = {
      from: "오수진 도자기 <ssjj2468@gmail.com>",
      to: "youremail@gmail.com",
      subject: "오수진 도자기 - 문의 접수", // email subject
      html:
        `           
<div>             
From:` +
        name +
        `<br /><br />              
Email: ` +
        email +
        `<br /><br />   
Options: ` +
options +
`<br /><br />   
File: ` +
file +
`<br /><br />           
Message:` +
        message +
        `<br /><br />           
</div>           
`, // email content in HTML
    };
    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Message Sent");
    });
  });
});