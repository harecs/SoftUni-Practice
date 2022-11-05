function findSmallestNumber(firstNumber, secondNumber, thirdNumber) {
    let numbers = [];
    numbers.push(firstNumber, secondNumber, thirdNumber);

    let smallestNumber = Number.MAX_SAFE_INTEGER;

    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }

    console.log(smallestNumber);
}