<?php
$data = json_decode(file_get_contents('php://input'), true);

$source = $data['source'] ?? 'brak';
$timestamp = $data['timestamp'] ?? date('c');

$logLine = $timestamp . " - Kliknięto: " . $source . "\n";

file_put_contents('log.txt', $logLine, FILE_APPEND | LOCK_EX);
http_response_code(200);
?>
