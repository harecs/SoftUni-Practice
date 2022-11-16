function sortNumbersZigZag(numbers) {
    let editedNumbers = numbers.slice();
    editedNumbers.sort((a, b) => b - a);
    let zigZagNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        let biggestNumber = editedNumbers.shift();
        let smallestNumber = editedNumbers.pop();

        zigZagNumbers.push(biggestNumber, smallestNumber);
    }

    console.log(zigZagNumbers.join(' '));
}