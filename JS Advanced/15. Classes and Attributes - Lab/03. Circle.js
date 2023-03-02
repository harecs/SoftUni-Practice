class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameterValue) {
        this.radius = diameterValue / 2;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }
}