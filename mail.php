<?php

    $name = $_POST["fullName"];
    $from = $_POST["email"];
    $phone = $_POST["phone"];
    $subject  = "Powiadomienie z formularza na stronie marki-it.pl";
    $to = "mariusz.drabarek24@gmail.com";
    $message = $_POST["message"];

    $txt = "Imię i nazwisko: " . $name . "\r\n" . "Telefon: " . $phone . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

    $headers = "From: " . $from . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";

    $mail_status = mail($to, $subject, $txt, $headers);

    if ($mail_status) {
        header("Location: /./kontakt.html?mail_status=sent");
    } else {
        header("Location: /./kontakt.html?mail_status=error");
    }