function printFirstAndLastKNumbers(input) {
    let k = input[0];
    let numbers = input.slice(1);

    let firstNumbers = numbers.slice(0, k);
    let lastNumbers = numbers.slice(numbers.length - k);

    console.log(firstNumbers.join(' '));
    console.log(lastNumbers.join(' '));
}