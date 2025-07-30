=== BUSINESS-SITE FULLSTACK (React + Node.js) ===

📁 Structure :
- client/ : Votre frontend React existant
- server/ : Backend Node.js (Express) avec API /api/contact
- data/messages.json : Stockage local des messages

🚀 Pour démarrer le projet :

1. Backend (terminal 1) :
--------------------------------
cd server
npm install
npm start

2. Frontend (terminal 2) :
--------------------------------
cd client
npm install
npm start

Le frontend utilise un proxy pour se connecter automatiquement à http://localhost:5000

📬 API disponible :
POST /api/contact
Body attendu : { "name": "Nom", "email": "Email", "message": "Texte" }

Les messages sont stockés dans server/data/messages.json

💡 Ce backend fonctionne 100% localement, sans Internet.