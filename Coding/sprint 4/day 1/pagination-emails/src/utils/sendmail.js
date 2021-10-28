const transporter = require("../configs/mail")

//send mail with defined transport object

module.exports = async () => {

    await transporter.sendMail({
        from: '"Test mail by snsa " <snsa@example.com>', // sender address
        to: "hello.snsa@gmail.com,hellos.nsa@gmail.com", // list of receivers
        subject: "Demo mail 2", // Subject line
        text: "Hello bro...", // plain text body
        html: "<h1>Hello there. This is a test mail.</h1>", // html body
    });
}