<?php
// Połączenie z bazą danych
$servername = "localhost"; // Nazwa hosta
$username = "sa"; // Nazwa użytkownika bazy danych
$password = "ZAQweds13!@"; // Hasło użytkownika bazy danych
$dbname = "users"; // Nazwa bazy danych

// Utworzenie połączenia
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Pobranie danych przesłanych za pomocą metody POST
$data = json_decode(file_get_contents("php://input"));

// Przygotowanie danych do wstawienia do bazy danych
$typElementu = $conn->real_escape_string($data->typ_elementu);
$tresc = $conn->real_escape_string($data->tresc);

// Zapytanie SQL w celu zapisania danych
$sql = "INSERT INTO elements (typ_elementu, tresc) VALUES ('$typElementu', '$tresc')";
if ($conn->query($sql) === TRUE) {
    http_response_code(200); // Sukces
} else {
    http_response_code(500); // Błąd serwera
}

// Zamknięcie połączenia
$conn->close();
?>
