const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sekelja.mirko6@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}, Let me know how you get along with the app`

    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sekelja.mirko6@gmail.com',
        subject: 'Zasto nam ides',
        text: `De bolan neka te jos s nama, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}