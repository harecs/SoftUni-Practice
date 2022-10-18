function findBiggestOfThreeNumbers(firstNumber, secondNumber, thirdNumber) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    if (firstNumber > biggestNumber) {
        biggestNumber = firstNumber;
    }
    if (secondNumber > biggestNumber) {
        biggestNumber = secondNumber;
    }
    if (thirdNumber > biggestNumber) {
        biggestNumber = thirdNumber;
    }

    console.log(biggestNumber);
}