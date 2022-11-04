function calculator(numOne, numTwo, operator) {
    let calculateOperation = null;

    switch (operator) {
        case 'add':
            calculateOperation = (a, b) => a + b;
            break;
        case 'subtract':
            calculateOperation = (a, b) => a - b;
            break;
        case 'multiply':
            calculateOperation = (a, b) => a * b;
            break;
        case 'divide':
            calculateOperation = (a, b) => a / b;
            break;
    }

   console.log(calculateOperation(numOne, numTwo));
}

calculator(2, 3, 'add');