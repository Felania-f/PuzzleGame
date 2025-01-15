import { Drawer } from './Drawer';
import { Player } from './Player';
import { PressurePlate } from './PressurePlate';
import { Door } from './Door';
import { LevelLoader } from './LevelLoader';

export class Game {
  private drawer: Drawer;
  public players: Player[]; // Changer en public pour un accès facile
  private pressurePlates: PressurePlate[];
  private doors: Door[];

  constructor(drawer: Drawer) {
    this.drawer = drawer;
    this.players = [];
    this.pressurePlates = [];
    this.doors = [];
  }

  public initialize(levelData: any): void {
    const levelLoader = new LevelLoader();
    const level = levelLoader.loadLevel(levelData);
    this.players = level.players;
    this.pressurePlates = level.pressurePlates;
    this.doors = level.doors;

    console.log('Players:', this.players);
    console.log('Pressure Plates:', this.pressurePlates);
    console.log('Doors:', this.doors);
  }

  public update(): void {
    this.drawer.clear();
    this.players.forEach(player => {
      this.drawer.drawCircle(player.position.x, player.position.y, 'blue', 1);

      this.pressurePlates.forEach(plate => {
        if (player.position.x === plate.position.x && player.position.y === plate.position.y) {
          plate.activate();
        }
        this.drawer.drawDiamond(plate.position.x, plate.position.y, 'green', 1);
      });

      this.doors.forEach(door => {
        this.drawer.drawRectangle(door.position.x, door.position.y, door.getStatus() ? 'yellow' : 'red', 1);
      });
    });
  }
}