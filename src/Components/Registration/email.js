var nodemailer = require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');

function emailUser(email){

    var transporter = nodemailer.createTransport(new SMTPTransport({
        host: 'smtp.ionos.com',
        port: 587,
        auth: {
          user: 'no-reply@thecryptocurrencyLedger.com',
          pass: 'LTwk8wXzq@34'
        },
        secure:false,
        tls: {rejectUnauthorized: false},
        debug:true
      })
      );

    var mailOptions = {
        from: 'no-reply@thecryptocurrencyLedger.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
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

