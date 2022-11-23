class Vehicle {
    constructor(typeInput, modelInput, partsInput, fuelInput) {
        this.type = typeInput;
        this.model = modelInput;
        this.parts = partsInput;
        this.parts.quality = Number(this.parts.engine) * Number(this.parts.power);
        this.fuel = Number(fuelInput);

        this.drive = (fuelLoss) => this.fuel -= fuelLoss;
    }
}