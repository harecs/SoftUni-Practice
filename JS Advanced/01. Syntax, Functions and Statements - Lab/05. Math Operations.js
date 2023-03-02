function calculateOperation(firstOperand, secondOperand, operationSign) {
    let operation = null;

    switch (operationSign) {
        case '+':
            operation = (a, b) => a + b;
            break;
        case '-':
            operation = (a, b) => a - b;
            break;
        case '*':
            operation = (a, b) => a * b;
            break;
        case '/':
            operation = (a, b) => a / b;
            break;
        case '%':
            operation = (a, b) => a % b;
            break;
        case '**':
            operation = (a, b) => a ** b;
            break;
    }

    console.log(operation(firstOperand, secondOperand));
}