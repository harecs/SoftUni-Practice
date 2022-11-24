class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = Number(quality);
        this.isOn = false;
        this.price = (800 - (this.info.age * 2) + (this.quality * 0.5));

        this.turnOn = function() {
            this.isOn = true;
            this.quality--;
            this.price = (800 - (this.info.age * 2) + (this.quality * 0.5));
        }

        this.turnOff = function() {
            this.isOn = false;
            this.quality--;
            this.price = (800 - (this.info.age * 2) + (this.quality * 0.5));

        }

        this.showInfo = function() {
            return JSON.stringify(this.info);
        }
    }
}