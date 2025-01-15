import { Drawer } from './Drawer';
import { Game } from './Game';
import { Player } from './Player';
import { PressurePlate } from './PressurePlate';
import { Door } from './Door';
import { LevelLoader } from './LevelLoader';

// Créez une instance de Drawer
const drawer = new Drawer(20, 20);
const game = new Game(drawer);

// Charger les données de niveau depuis le fichier JSON
fetch('./level1.json')
  .then(response => response.json())
  .then(levelData => {
    game.initialize(levelData);
    game.update();
  })
  .catch(error => {
    console.error('Error loading level data:', error);
  });

// Ajoutez un écouteur d'événements pour les touches du clavier
window.addEventListener('keydown', (event) => {
  const player1 = game.players[0]; // Supposons que nous avons un seul joueur pour l'instant
  switch (event.key) {
    case 'ArrowUp':
      player1.move(0, -1);
      break;
    case 'ArrowDown':
      player1.move(0, 1);
      break;
    case 'ArrowLeft':
      player1.move(-1, 0);
      break;
    case 'ArrowRight':
      player1.move(1, 0);
      break;
  }
  game.update(); // Mettre à jour l'affichage après le mouvement
});