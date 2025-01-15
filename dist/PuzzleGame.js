import { Drawer } from './Drawer';
import { Game } from './Game';
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
