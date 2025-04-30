<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "mar.dra@wp.pl";
    $subject = "Wiadomość z formularza kontaktowego";
    $name = $_POST["fullName"] . "\n";
    $from = $_POST["email"] . "\n";
    $phone = $_POST["phone"];
    $message .= "Wiadomość:\n" . $_POST["message"];
    $txt = "Imię i nazwisko: " . $name . "\r\n" . "Telefon: " . $phone . "\r\n" . "Email: " . $from . "\r\n" . "\r\n"  . $message;

    $headers = "From: " . $_POST["fullName"];

    if (mail($to, $subject, $txt, $headers)) {
        header("Location: /./kontakt.html?mail_status=sent");
    } else {
        header("Location: /./kontakt.html?mail_status=error");
    }
}
?>