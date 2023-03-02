class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }
    
    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(input) {
        let integer = typeof input == 'number' ? input : this.parse(input);
        return new Hex(integer + this.value);
    }

    minus(input) {
        let integer = typeof input == 'number' ? input : this.parse(input);
        return new Hex(this.value - integer);
    }

    parse(hexInput) {
        return parseInt(hexInput, 16);
    }
}