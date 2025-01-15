export class Door {
    constructor(x, y) {
        this.position = { x, y };
        this.isOpen = false;
    }
    open() {
        this.isOpen = true;
    }
    close() {
        this.isOpen = false;
    }
    getStatus() {
        return this.isOpen;
    }
    getPosition() {
        return this.position;
    }
}
