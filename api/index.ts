const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http://example.com', // Nur Anfragen von http://example.com zulassen
    methods: 'GET,POST', // Nur GET und POST Methoden zulassen
    allowedHeaders: ['Content-Type', 'Authorization'] // Nur bestimmte Header zulassen
  };


// Middleware zum Parsen von JSON-Anfragen
app.use(express.json());
app.use(cors(corsOptions));
// Beispiel-Route
app.get('contact/', (req, res) => {
  res.send();
});

// Startet den Server
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});

module.exports = app;
