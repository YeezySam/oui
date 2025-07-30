const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Message = require('./models/Message'); // Modèle MongoDB

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contactDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connecté à MongoDB'))
.catch((err) => console.error('❌ Erreur de connexion MongoDB :', err));

// ✅ Route pour enregistrer les messages
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.json({ message: 'Message enregistré avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement :', error);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

// ✅ Lancement du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`);
});
