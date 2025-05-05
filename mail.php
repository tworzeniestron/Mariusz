<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "mar.dra@wp.pl"; 
    $subject = "Wiadomość z formularza kontaktowego"; 

    $name = strip_tags(trim($_POST["fullName"]));
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $messageContent = strip_tags(trim($_POST["message"]));

    if (!$name || !$email || !$messageContent) {
        header("Location: /kontakt.html?mail_status=invalid");
        exit;
    }

    $message = "Imię i nazwisko: " . $name . "\r\n"; 
    $message .= "Telefon: " . $phone . "\r\n"; 
    $message .= "Email: " . $email . "\r\n\r\n"; 
    $message .= "Wiadomość:\r\n" . $messageContent; 

    $headers = "From: kontakt@h53.seohost.pl\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $log = "[" . date("Y-m-d H:i:s") . "] "
        . "Imię: $name | Email: $email | Wiadomość: " . substr($message, 0, 100) . "...\n";
    file_put_contents("formLog.txt", $log, FILE_APPEND);
    
    if (mail($to, $subject, $message, $headers)) { 
        header("Location: /kontakt.html?mail_status=sent"); 
        exit(); 
    } else {
        header("Location: /kontakt.html?mail_status=error"); 
        exit(); 
    }
}
?>
