export class Player {
    constructor(name, startX, startY) {
        this.name = name;
        this.position = { x: startX, y: startY };
    }
    move(x, y) {
        this.position.x += x;
        this.position.y += y;
    }
    getPosition() {
        return this.position;
    }
}
