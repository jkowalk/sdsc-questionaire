"use strict";
const nodemailer = require("nodemailer");

/*
attachments in form [{filename: attachment_send_name, path: attachment_path}]
 */
async function sendEmail(recipient, subject, content, attachments) {
    console.log("Sending email ...");
    console.log("To: ", recipient, "Subject: ", subject);
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.ethereal.email",
        port: process.env.EMAIL_PORT || 587,
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
        },
        debug: true,
        auth: {
            user: process.env.EMAIL_USERNAME || testAccount.user,
            pass: process.env.EMAIL_PASSWORD || testAccount.pass,
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.SENDER_EMAIL || '"Fred Foo 👻" <foo@example.de>', // sender address
        to: recipient, // list of receivers
        subject: subject, // Subject line
        text: content, // plain text body
        //html: "<b>Hello world?</b>", // html body
        attachments: attachments
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports.sendEmail = sendEmail;