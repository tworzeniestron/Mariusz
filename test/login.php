<?php
// Połączenie z bazą danych SQL Server
$serverName = "DELL_G3"; // Nazwa hosta
$connectionOptions = array(
    "Database" => "Change", // Nazwa bazy danych
    "Uid" => "sa", // Nazwa użytkownika bazy danych
    "PWD" => "ZAQweds13" // Hasło użytkownika bazy danych
);

// Utworzenie połączenia
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Sprawdzenie połączenia
if ($conn === false) {
    die("Connection failed: " . sqlsrv_errors());
}

// Pobranie danych przesłanych za pomocą metody POST
$newUsername = $_POST['username'];
$newPassword = $_POST['password'];

// Haszowanie hasła przed zapisaniem do bazy danych
$hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

// Zapytanie SQL w celu dodania nowego użytkownika do bazy danych
$sql = "INSERT INTO users (username, password, role) VALUES (?, ?, 'czytelnik')";
$params = array($newUsername, $hashedPassword);
$stmt = sqlsrv_query($conn, $sql, $params);

if ($stmt === false) {
    die("Query failed: " . sqlsrv_errors());
} else {
    http_response_code(200); // Sukces
}

// Zamknięcie połączenia
sqlsrv_close($conn);
?>
