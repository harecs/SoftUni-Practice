function multiplication(a) {
    return function (b) {
        return a * b;
    }
}

console.log(multiplication(2)(4));
console.log(multiplication(-2)(4));