function exponent(baseNum, exponentNum, calculatedNum = 1) {
    if (exponentNum == 0) {
        return calculatedNum;
    }

    return exponent(baseNum, exponentNum - 1, calculatedNum * baseNum);
}

console.log(exponent(4, 2));
console.log(exponent(3, 3));