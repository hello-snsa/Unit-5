const transporter = require("../configs/mail")

//send mail with defined transport object

module.exports = async ({ to, subject, text, html }) => {

    await transporter.sendMail({
        from: '"Test mail by snsa " <snsa@example.com>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}