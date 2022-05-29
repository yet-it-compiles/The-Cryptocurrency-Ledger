var nodemailer = require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');

function emailUser(email){

    console.log('Sending email to ' + email);
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

exports.emailUser = emailUser;

