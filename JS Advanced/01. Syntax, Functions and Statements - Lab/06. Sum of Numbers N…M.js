function sum(firstElement, secondElement) {
    let firstNumber = Number(firstElement);
    let secondNumber = Number(secondElement);
    let sum = 0;

    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }

    return sum;
}