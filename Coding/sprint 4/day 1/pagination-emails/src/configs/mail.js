const nodemailer = require("nodemailer");


module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "4250aeafbdcd0b", // generated ethereal user
        pass: "d5c14c5df3e651", // generated ethereal password
    },
});