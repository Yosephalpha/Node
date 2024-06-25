// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//         user: "maddison53@ethereal.email",
//         pass: "jn7jnAPss4f63QBp6D",
//     },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//         from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//         to: "sanjuriya22@gmail.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// main().catch(console.error);



const dotenv = require('dotenv')
const myEnv = dotenv.config()
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;
console.log(process.env)

// Replace these values with your credentials
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

// Set up OAuth2 client
const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
    try {
        const accessToken = await oauth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'your-email@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token
            }
        });

        const mailOptions = {
            from: 'sanjuriya22@gmail.com',
            to: 'sangeethashanmugam22@gmail.com',
            subject: 'Test Email',
            text: 'Hello from nodemailer!'
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent...', result);
    } catch (error) {
        console.log('Error:', error);
    }
}

sendMail();

