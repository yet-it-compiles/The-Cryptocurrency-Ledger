/**
 * This module contains the logic to send emails to the users email address
 */

let nodemailer = require('nodemailer');
const SMTPTRANSPORT = require('nodemailer/lib/smtp-transport');

/**
 * Sends email to the passed in email address
 * @param {String} email is the email address the user has on file
 */
function sendsEmailToUser(email) {
    instantiateTransporter()

    // Populate more mailOptions, this will later be made more dynamic
    let mailOptions = {
        from: 'No-Reply@TheCryptocurrencyLedger.com',
        to: email,
        subject: 'Ledger Registration!',
        text: "Welcome to The Cryptocurrency Ledger! \n\tWe're excited to help enhance your trading experience."
    };

    transporter.sendMail(mailOptions, function (error, info) {
        // Debug mode on or off
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

/**
 * Instantiates transporter device to send email with the correct SMTP parameters
 */
function instantiateTransporter() {
    let transporter = nodemailer.createTransport(new SMTPTRANSPORT({
        host: 'smtp.ionos.com',
        port: 587,
        auth: {
            user: 'No-Reply@TheCryptocurrencyLedger.com',
            pass: 'LTwk8wXzq@34'
        },
        secure: false,
        tls: {rejectUnauthorized: false},
        debug: true
    }));
}

// Exports this package, so it can be can easily be called from other scripts
exports.emailUser = sendsEmailToUser;

