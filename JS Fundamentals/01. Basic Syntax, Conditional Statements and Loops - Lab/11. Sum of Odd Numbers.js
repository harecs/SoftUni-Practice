function printSumOfOddNumbers(n) {
    let number = n;
    let sum = 0;
    let currentNumber = 1;

    while (number > 0) {
        sum += currentNumber;
        console.log(currentNumber);
        currentNumber += 2;
        number--;
    }

    console.log("Sum: " + sum);
}