export class PressurePlate {
  public position: { x: number; y: number };
  private isActive: boolean;

  constructor(x: number, y: number) {
    this.position = { x, y };
    this.isActive = false;
  }

  public activate(): void {
    this.isActive = true;
  }

  public deactivate(): void {
    this.isActive = false;
  }

  public getStatus(): boolean {
    return this.isActive;
  }

  // public getPosition(): { x: number; y: number } {
  //   return this.position;
  // }
}
