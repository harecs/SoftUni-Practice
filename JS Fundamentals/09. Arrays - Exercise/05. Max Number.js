function findMaxNumbers(numbers) {
    let maxNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        let isMax = true;

        for (let j = i + 1; j < numbers.length; j++) {
            if (currentNumber <= numbers[j]) {
                isMax = false;
            }
        }

        if (isMax) {
            maxNumbers.push(currentNumber);
        }
    }

    console.log(maxNumbers.join(' '));
}