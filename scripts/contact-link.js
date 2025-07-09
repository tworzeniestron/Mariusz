document.getElementById('fb-link').addEventListener('click', () => {
  logClick('Facebook'); // rejestruje kliknięcie w Facebook
});

document.getElementById('phone-link').addEventListener('click', () => {
  logClick('Telefon'); // rejestruje kliknięcie w Telefon
});

document.getElementById('insta-link').addEventListener('click', () => {
  logClick('Instagram'); // rejestruje kliknięcie w Instagram
});

document.getElementById('email-link').addEventListener('click', () => {
  logClick('Email'); // rejestruje kliknięcie w Email
});

function logClick(source) {
  fetch('http://localhost:3000/log', { // wysyła do backendu Express
    method: 'POST', // metoda POST
    headers: {
      'Content-Type': 'application/json' // dane jako JSON
    },
    body: JSON.stringify({
      source: source, // np. Facebook
      timestamp: new Date().toISOString() // aktualny czas
    })
  }).catch(err => console.error('Błąd połączenia z backendem:', err)); // obsługa błędu
}

///////////////////////////
const express = require('express'); // importuje express
const fs = require('fs'); // importuje fs do operacji plikowych
const app = express(); // tworzy aplikację express
const port = 3000; // port na którym działa serwer

app.use(express.json()); // middleware do JSON

app.post('/log', (req, res) => {
  const { source, timestamp } = req.body; // pobiera dane z body
  const logEntry = `${timestamp} - Kliknięto: ${source}\n`; // formatuje dane

  fs.appendFile('log.txt', logEntry, (err) => { // dopisuje do pliku log.txt
    if (err) {
        console.error('Błąd zapisu do pliku:', err); // loguje błąd
        return res.sendStatus(500); // zwraca błąd HTTP 500
        }
        res.sendStatus(200); // zwraca sukces
    });
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`); // uruchamia serwer
});
