const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dataFile = path.join(__dirname, '../data/messages.json');

router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const newMessage = { name, email, message, date: new Date().toISOString() };

    fs.readFile(dataFile, 'utf8', (err, data) => {
        let messages = [];
        if (!err && data) {
            messages = JSON.parse(data);
        }
        messages.push(newMessage);
        fs.writeFile(dataFile, JSON.stringify(messages, null, 2), (err) => {
            if (err) return res.status(500).json({ error: "Erreur d'écriture" });
            res.status(200).json({ success: true, message: 'Message reçu' });
        });
    });
});

module.exports = router;