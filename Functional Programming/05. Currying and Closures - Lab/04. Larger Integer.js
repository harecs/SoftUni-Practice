function largerInteger(a) {
    return function (b) {
        return Math.max(a, b);
    }
}

console.log(largerInteger(2)(4));
console.log(largerInteger(-2)(-4));