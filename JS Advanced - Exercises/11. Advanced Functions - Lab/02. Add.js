function solution(inputNumber) {
    let firstNumber = inputNumber;

    return function (secondNumber) {
        return firstNumber + secondNumber;
    }
}