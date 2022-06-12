/**
 * This module fires off emails to the supplied email address using our no-reply account
 */

var nodemailer = require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');

/** 
 * Sends email to the passed in email address 
 * @param {String} email email address to send mail to.
 */

function emailUser(email){

 
 // Instantiates transporter device to send email with
 // correct SMTP parameters

    var transporter = nodemailer.createTransport(new SMTPTransport({
        host: 'smtp.ionos.com',
        port: 587,
        auth: {
          user: 'No-Reply@TheCryptocurrencyLedger.com',
          pass: 'LTwk8wXzq@34'
        },
        secure:false,
        tls: {rejectUnauthorized: false},
        debug:true
      })
      );
// Populate more mailOptions, this will later be made more dynamic
    var mailOptions = {
        from: 'No-Reply@TheCryptocurrencyLedger.com',
        to: email,
        subject: 'Ledger Registration!',
        text: "Welcome to Ledger, we're excited to help enhance your trading experience"
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}

// Exports this package so it can be can easily be called from other scripts
exports.emailUser = emailUser;

