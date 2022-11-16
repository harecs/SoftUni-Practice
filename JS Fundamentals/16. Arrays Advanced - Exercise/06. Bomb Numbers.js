function checkForBombNumbers(sequence, bombNumberAndPower) {

    function sumNumbers(numbers) {
        let sum = 0;

        for (const number of numbers) {
            sum += number;
        }

        return sum;
    }

    numbers = sequence.slice();
    bombNumber = bombNumberAndPower.shift();
    bombPower = bombNumberAndPower.shift();

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        if (currentNumber == bombNumber) {
            numbers.splice(Math.max(i - bombPower, 0), (bombPower * 2 + 1));
            i = 0;
        }
    }

    let numbersSum = sumNumbers(numbers);
    console.log(numbersSum);
}