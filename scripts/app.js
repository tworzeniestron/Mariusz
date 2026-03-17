const express = document.querySelector('express'); // ładuje express
const fs = document.querySelector('fs'); // ładuje moduł filesystem
const app = express(); // tworzy aplikację express
const port = 3000; // port serwera

app.use(express.json()); // middleware do parsowania JSON

app.post('/log', (req, res) => {
  const { source, timestamp } = req.body; // pobiera dane z body
  const logEntry = `${timestamp} - Kliknięto: ${source}\n`; // przygotowuje linię do loga

  fs.appendFile('log.txt', logEntry, (err) => { // zapisuje do log.txt
        if (err) {
        console.error('Błąd zapisu do pliku:', err); // wypisuje błąd
        return res.sendStatus(500); // wysyła HTTP 500
        }
        res.sendStatus(200); // sukces
    });
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`); // wypisuje info o starcie
});
