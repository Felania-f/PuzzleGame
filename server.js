const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json()); // Pour traiter les requêtes JSON

// Servir les fichiers statiques du dossier dist
app.use(express.static(path.join(__dirname, 'dist')));

// Point de terminaison pour le fichier JSON
app.get('/level1.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'level1.json'));
});

// Point de terminaison pour ouvrir la porte
app.post('/door/open', (req, res) => {
  // Vérification si le corps de la requête est vide
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Bad Request: No data provided' });
  }

  // Logique pour ouvrir la porte
  res.json({ status: 'Door opened' });
});

// Point de terminaison pour fermer la porte
app.post('/door/close', (req, res) => {
  // Vérification si le corps de la requête est vide
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Bad Request: No data provided' });
  }

  // Logique pour fermer la porte
  res.json({ status: 'Door closed' });
});

// Point de terminaison pour obtenir l'état de la porte
app.get('/door/status', (req, res) => {
  const isOpen = false; // Remplacez ceci par la logique réelle
  res.json({ isOpen: isOpen });
});

// Point de terminaison pour activer une plaque de pression
app.post('/pressurePlate/activate', (req, res) => {
  // Vérification si le corps de la requête est vide
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Bad Request: No data provided' });
  }

  // Logique pour activer la plaque de pression
  res.json({ status: 'Pressure plate activated' });
});

// Point de terminaison pour désactiver une plaque de pression
app.post('/pressurePlate/deactivate', (req, res) => {
  // Vérification si le corps de la requête est vide
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Bad Request: pas de données fournies' });
  }

  // Logique pour désactiver la plaque de pression
  res.json({ status: 'Pressure plate deactivated' });
});

// Point de terminaison pour déplacer un joueur
app.post('/player/move', (req, res) => {
  const { playerName, moveX, moveY } = req.body;

  // Vérification si le corps de la requête est vide ou si les données requises sont manquantes
  if (!req.body || !playerName || moveX === undefined || moveY === undefined) {
    return res.status(400).json({ error: 'Bad Request: Missing required data' });
  }

  // Logique pour déplacer le joueur
  // Exemple de réponse
  res.json({
    status: 'Player moved',
    playerName: playerName,
    newPosition: {
      x: moveX, // Remplacez ceci par la logique réelle pour calculer la nouvelle position
      y: moveY  // Remplacez ceci par la logique réelle pour calculer la nouvelle position
    }
  });
});

// Page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware pour analyser le corps des requêtes JSON
// app.use(express.json()); // Ajoutez cette ligne pour pouvoir traiter les requêtes JSON

// // Servir les fichiers statiques du dossier dist
// app.use(express.static(path.join(__dirname, 'dist')));

// // Point de terminaison pour le fichier JSON
// app.get('/level1.json', (req, res) => {
//   res.sendFile(path.join(__dirname, 'level1.json'));
// });

// // Point de terminaison pour ouvrir la porte
// app.post('/door/open', (req, res) => {
//   res.json({ status: 'Door opened' });
// });

// // Point de terminaison pour fermer la porte
// app.post('/door/close', (req, res) => {
//   res.json({ status: 'Door closed' });
// });

// // Point de terminaison pour obtenir l'état de la porte
// app.get('/door/status', (req, res) => {
//   const isOpen = false; // Remplacez ceci par la logique réelle
//   res.json({ isOpen: isOpen });
// });

// // Point de terminaison pour activer une plaque de pression
// app.post('/pressurePlate/activate', (req, res) => {
//   res.json({ status: 'Pressure plate activated' });
// });

// // Point de terminaison pour désactiver une plaque de pression
// app.post('/pressurePlate/deactivate', (req, res) => {
//   res.json({ status: 'Pressure plate deactivated' });
// });

// // Point de terminaison pour déplacer un joueur
// app.post('/player/move', (req, res) => {
//   const { playerName, moveX, moveY } = req.body;

//   // Logique pour déplacer le joueur
//   // Vous pouvez ajouter ici la logique pour mettre à jour la position du joueur
//   // Par exemple, vous pouvez stocker la position du joueur dans un objet
//   // et mettre à jour ses coordonnées en fonction de moveX et moveY.

//   // Exemple de réponse
//   res.json({
//     status: 'Player moved',
//     playerName: playerName,
//     newPosition: {
//       x: moveX, // Remplacez ceci par la logique réelle pour calculer la nouvelle position
//       y: moveY  // Remplacez ceci par la logique réelle pour calculer la nouvelle position
//     }
//   });
// });

// // Page d'accueil
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Démarrer le serveur
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });