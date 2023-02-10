function productSign(a) {
    return function (b) {
        return function (c) {
            let product = a + b + c;

            if (product > 0) {
                return 'The sign is +';
            } else if (product < 0) {
                return 'The sign is -';
            } else if (product == 0) {
                return 'Neither negative nor positive';
            }
        }
    }
}

console.log(productSign(2)(4)(2));
console.log(productSign(-2)(-4)(-3));
console.log(productSign(2)(-2)(0));