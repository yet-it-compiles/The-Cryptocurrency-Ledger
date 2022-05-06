<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer;
use PHPMailer\SMTP;
use PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/PHPMailerAutoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.ionos.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'no-reply@thecryptocurrencyledger.com';                     //SMTP username
    $mail->Password   = 'KRjCadvd14brp1^LR';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('no-reply@thecryptocurrencyledger.com', 'The Cryptocurrency Ledger');
    $mail->addAddress('zachary.cushon@gmail.com', 'first_name last_name');     //Add a recipient, pull first and last from database
    //$mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo('no-reply@thecryptocurrencyledger.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Verification';
    $mail->Body    = 'Welcome to Ledger!, we are excited to have you joining us. Click the link below to officially register your account!';
    $mail->AltBody = 'Welcome to Ledger!, we are excited to have you joining us. Click the link below to officially register your account!';

    $mail->send();
    
    // Debug code
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
