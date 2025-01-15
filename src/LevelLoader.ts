// import { Player } from './Player';
// import { PressurePlate } from './PressurePlate';
// import { Door } from './Door';

// export class LevelLoader {
//   public loadLevel(levelData: any): { players: Player[], pressurePlates: PressurePlate[], doors: Door[] } {
//     const players: Player[] = levelData.players.map((p: any) => new Player(p.name, p.startX, p.startY));
//     const pressurePlates: PressurePlate[] = levelData.pressurePlates.map((pp: any) => new PressurePlate(pp.x, pp.y));
//     const doors: Door[] = levelData.doors.map((d: any) => new Door(d.x, d.y));

//     return { players, pressurePlates, doors };
//   }
// }


import { Player } from './Player';
import { PressurePlate } from './PressurePlate';
import { Door } from './Door';

export class LevelLoader {
  public loadLevel(levelData: any): { players: Player[], pressurePlates: PressurePlate[], doors: Door[] } {
    const players = levelData.players.map((playerData: any) => new Player(playerData.name, playerData.startX, playerData.startY));
    const pressurePlates = levelData.pressurePlates.map((plateData: any) => new PressurePlate(plateData.x, plateData.y));
    const doors = levelData.doors.map((doorData: any) => new Door(doorData.x, doorData.y));

    return { players, pressurePlates, doors };
  }
}