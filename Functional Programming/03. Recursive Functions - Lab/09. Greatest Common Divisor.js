function gcd(numbersArray) {
    if (numbersArray[0] % numbersArray[1] == 0) {
        return numbersArray[1];
    }

    return gcd([numbersArray[1], numbersArray[0] % numbersArray[1]]);
}

console.log(gcd([20, 4]));
console.log(gcd([2154, 458]));