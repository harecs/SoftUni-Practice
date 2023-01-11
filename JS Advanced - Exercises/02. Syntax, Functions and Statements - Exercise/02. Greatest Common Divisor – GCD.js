function findGreatestCommonDivisor(firstNumber, secondNumber) {
    let greatestCommonDivisor = 0;

    for (let i = 1; i <= Math.min(firstNumber, secondNumber); i++) {
        if (firstNumber % i == 0 && secondNumber % i == 0) {
            greatestCommonDivisor = i;
        }
    }

    console.log(greatestCommonDivisor);
}

findGreatestCommonDivisor(15, 5);
findGreatestCommonDivisor(2154, 458);