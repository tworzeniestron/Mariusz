const express = document.querySelector('express');
const cors = document.querySelector('cors');
const fs = document.querySelector('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.post('/log', (req, res) => {
  const { source, timestamp } = req.body;
  const logEntry = `${timestamp} - Kliknięto: ${source}\n`;

  fs.appendFile('log.txt', logEntry, (err) => {
        if (err) {
        console.error('Błąd zapisu do pliku:', err);
        return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
