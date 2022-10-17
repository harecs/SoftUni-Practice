function calculate(firstNumber, operator, secondNumber) {
    let calculatedResult = 0;

    switch (operator) {
        case '+':
            calculatedResult = firstNumber + secondNumber;
            break;
        case '-':
            calculatedResult = firstNumber - secondNumber;
            break;
        case '/':
            calculatedResult = firstNumber / secondNumber;
            break;
        case '*':
            calculatedResult = firstNumber * secondNumber;
            break;
    }

    console.log(calculatedResult.toFixed(2));
}