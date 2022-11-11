function sumFirstAndLastElements(numbersInput) {
    let firstNumber = Number(numbersInput.shift());
    let lastNumber = Number(numbersInput.pop());

    let sum = firstNumber + lastNumber;

    console.log(sum);
}