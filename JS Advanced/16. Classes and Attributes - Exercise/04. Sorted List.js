class List {
    numbers = [];
    size = this.numbers.length;

    add(number) {
        this.numbers.push(number);
        this.numbers.sort((a, b) => a - b);
        this.size = this.numbers.length;
        return this.numbers;
    }

    remove(index) {
        if (index >= 0 && index < this.numbers.length) {
            this.numbers.splice(index, 1);
            this.size = this.numbers.length;
            return this.numbers;
        }
    }

    get(index) {
        if (index >= 0 && index < this.numbers.length) {
            return this.numbers[index];
        }
    }
}