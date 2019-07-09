const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/* const msg = {
    to: 'surilopez@gmail.com',
    from: 'surilopez@gmail.com',
    subjet: 'This is my first email',
    text: 'I hope this one actually to you.',
}
sgMail.send(msg) */



const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'surilopez@gmail.com',
        subjet: 'Thanks for joining in !!!!',
        text:`Welcome to the app, ${name}, Let me know how you get along with the app`

    })

}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'surilopez@gmail.com',
        subjet: 'Account Cancelation !!!!',
        text:`Dear, ${name}, Your account was canceled`

    })

}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}