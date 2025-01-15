export class Door {
  public position: { x: number; y: number };
  private isOpen: boolean;

  constructor(x: number, y: number) {
    this.position = { x, y };
    this.isOpen = false;
  }

  public open(): void {
    this.isOpen = true;
  }

  public close(): void {
    this.isOpen = false;
  }

  public getStatus(): boolean {
    return this.isOpen;
  }

  public getPosition(): { x: number; y: number } {
    return this.position;
  }
}