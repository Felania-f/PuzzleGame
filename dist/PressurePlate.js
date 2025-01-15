export class PressurePlate {
    constructor(x, y) {
        this.position = { x, y };
        this.isActive = false;
    }
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
    getStatus() {
        return this.isActive;
    }
    getPosition() {
        return this.position;
    }
}
