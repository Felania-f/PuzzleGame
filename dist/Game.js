import { LevelLoader } from './LevelLoader';
export class Game {
    constructor(drawer) {
        this.drawer = drawer;
        this.players = [];
        this.pressurePlates = [];
        this.doors = [];
    }
    initialize(levelData) {
        const levelLoader = new LevelLoader();
        const level = levelLoader.loadLevel(levelData);
        this.players = level.players;
        this.pressurePlates = level.pressurePlates;
        this.doors = level.doors;
    }
    update() {
        this.drawer.clear();
        this.players.forEach(player => {
            this.drawer.drawCircle(player.position.x, player.position.y, 'blue', 1);
        });
        this.pressurePlates.forEach(plate => {
            this.drawer.drawRectangle(plate.position.x, plate.position.y, plate.getStatus() ? 'green' : 'red', 1);
        });
        this.doors.forEach(door => {
            this.drawer.drawRectangle(door.position.x, door.position.y, door.getStatus() ? 'yellow' : 'gray', 1);
        });
    }
}
