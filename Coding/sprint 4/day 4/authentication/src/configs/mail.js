require('dotenv').config();
const nodemailer = require("nodemailer");


module.exports = nodemailer.createTransport({
    host: process.env.NODE_ENV === "development" ? "smtp.mailtrap.io" : "",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USERNAME, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
});