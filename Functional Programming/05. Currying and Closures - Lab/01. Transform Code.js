function multiply(a, b, c) {
    return a * b * c;
}

function multiply_curried(a) {
    return function (b) {
        return function (c) {
                return (a * b * c);
        }
    }
}

multiply_curried(2)(4)(8);
multiply_curried(2)(3)(5);