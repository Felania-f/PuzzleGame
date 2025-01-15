import { Player } from './Player';
import { PressurePlate } from './PressurePlate';
import { Door } from './Door';
export class LevelLoader {
    loadLevel(levelData) {
        const players = levelData.players.map((p) => new Player(p.name, p.startX, p.startY));
        const pressurePlates = levelData.pressurePlates.map((pp) => new PressurePlate(pp.x, pp.y));
        const doors = levelData.doors.map((d) => new Door(d.x, d.y));
        return { players, pressurePlates, doors };
    }
}
