class Stringer {
    constructor(inputString, desiredLength) {
        this.innerString = inputString;
        this.innerLength = desiredLength;
    }

    increase(number) {
        this.innerLength += number;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    decrease(number) {
        this.innerLength -= number;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength == 0) {
            return '...';
        }

        let output = 
            this.innerString.length > this.innerLength
            ? this.innerString.substring(0, this.innerLength).concat('...')
            : this.innerString;

        return output;
    }
}