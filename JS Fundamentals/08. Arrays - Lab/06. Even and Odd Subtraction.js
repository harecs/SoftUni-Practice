function calculateEvenAndOddSubstraction(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    let evenAndOddSubstraction = 0;

    for (const number of numbers) {
        let currentNumber = Number(number);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    evenAndOddSubstraction = evenSum - oddSum;
    console.log(evenAndOddSubstraction);
}