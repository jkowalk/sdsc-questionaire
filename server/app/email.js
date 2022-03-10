"use strict";
const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter_auth = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "",
    port: process.env.EMAIL_PORT || 587, //587
    secure: process.env.EMAIL_SECURE || false,
    debug: true,
    auth: {
        user: process.env.EMAIL_USERNAME || "",
        pass: process.env.EMAIL_PASSWORD || "",
    }
});

const transporter_no_auth = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "",
    port: process.env.EMAIL_PORT || 587, //587
    secure: process.env.EMAIL_SECURE || false,
    debug: true,
});

const transporter = process.env.NO_EMAIL_AUTH ? transporter_no_auth : transporter_auth;

/**
 * Sends email
 * attachments in form [{filename: attachment_send_name, path: attachment_path}]
 **/
async function sendEmail(recipient, subject, content, attachments, ccEmail) {
    console.log("Sending email ...");
    console.log("To: ", recipient, "Subject: ", subject);
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing




    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.SENDER_EMAIL || '"Fred Foo 👻" <foo@example.de>', // sender address
        to: recipient, // list of receivers
        cc: ccEmail ? ccEmail : null,
        subject: subject, // Subject line
        text: content, // plain text body
        //html: "<b>Hello world?</b>", // html body
        attachments: attachments
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

function verifyConnection() {
    console.log("Verifying email connection...");
    // verify connection configuration
    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });
}

module.exports.sendEmail = sendEmail;
module.exports.verifyConnection = verifyConnection;