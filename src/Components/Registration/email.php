<?php
require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.ionos.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'no-reply@thecryptocurrencyledger.com';                 // SMTP username
$mail->Password = 'LTwk8wXzq@34';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$link = "https://firm-site-349621.uw.r.appspot.com/signup"; // This is a stand in link, I will need to make some way to generate verification links

$mail->From = 'no-reply@thecryptocurrencyledger.com';
$mail->FromName = 'Ledger';
//$mail->addAddress('ty.unsworth@gmail.com', 'ty.unsworth@gmail.com');     // Add a recipient
$mail->addAddress('zachary.cushon@GMail.com','Tyler Unsworth');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Ledger Account Verification';
$mail->Body    = "<tr style='background: #cfcfcf;'>Welcome to <i>Ledger</i>, we're excited to help enhance your trading experience with our unparalleled crypto monitoring system!<br> Follow the link below to officially verify your Ledger account <br><br> $link<br><br>Thank you for choosing Ledger <br> - <i> Ledger Team</i>";
$mail->AltBody = "Welcome to Ledger, we're excited to help enhance your trading experience";

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
