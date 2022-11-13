function createNumbersSequence(sequenceLength, k) {

    function createNumbersArray(k) {
        let numbersArray = [];

        for (let i = 0; i < k; i++) {
            if (i == k - 1) {
                numbersArray.push(1);
            } else {
                numbersArray.push(0);
            }
        }

        return numbersArray;
    }

    let numbers = createNumbersArray(k);

    for (let i = 0; i < sequenceLength - 1; i++) {
        let currentNumber = 0;

        for (let j = i; j < k + i; j++) {
            currentNumber += numbers[j];
        }

        numbers.push(currentNumber);
    }

    numbers = numbers.slice(k - 1);
    console.log(numbers.join(' '));
}