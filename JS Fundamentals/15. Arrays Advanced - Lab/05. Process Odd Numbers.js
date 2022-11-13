function processOddPositionsNumbers(numbers) {
    let oddPositionsNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 != 0) {
            oddPositionsNumbers.push(numbers[i] * 2);
        }
    }

    oddPositionsNumbers.reverse();

    console.log(oddPositionsNumbers.join(' '));
}