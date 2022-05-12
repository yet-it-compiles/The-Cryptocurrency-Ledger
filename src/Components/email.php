<?php
require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.ionos.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'no-reply@thecryptocurrencyledger.com';                 // SMTP username
$mail->Password = 'vRS%5%GxWk!r';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->From = 'no-reply@thecryptocurrencyledger.com';
$mail->FromName = 'no-reply';
//$mail->addAddress('ty.unsworth@gmail.com', 'ty.unsworth@gmail.com');     // Add a recipient
$mail->addAddress('Zachary.cushon@gmail.com','zachary.cushon@gmail.com');
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Welcome to Ledger!';
$mail->Body    = "Welcome to Ledger, we're excited to help enhance your <i>trading experience</i>";
$mail->AltBody = "Welcome to Ledger, we're excited to help enhance your trading experience";

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
