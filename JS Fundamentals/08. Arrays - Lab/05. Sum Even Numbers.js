function sumEvenNumbersFromArray(numbers) {
    let sumOfEvenNumbers = 0;

    for (const number of numbers) {
        let currentNumber = Number(number);
        
        if (currentNumber % 2 === 0) {
            sumOfEvenNumbers += currentNumber;
        }
    }

    console.log(sumOfEvenNumbers);
}