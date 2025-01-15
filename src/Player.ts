// export class Player {
//   public position: { x: number; y: number };
//   public name: string;

//   constructor(name: string, startX: number, startY: number) {
//     this.name = name;
//     this.position = { x: startX, y: startY };
//   }

//   public move(x: number, y: number): void {
//     this.position.x += x;
//     this.position.y += y;
//   }

//   public getPosition(): { x: number; y: number } {
//     return this.position;
//   }
// }

export class Player {
  public position: { x: number; y: number };
  private name: string;

  constructor(name: string, startX: number, startY: number) {
    this.name = name;
    this.position = { x: startX, y: startY };
  }

  public move(dx: number, dy: number): void {
    this.position.x += dx;
    this.position.y += dy;
  }
}