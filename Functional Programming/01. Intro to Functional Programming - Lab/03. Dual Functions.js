function operate(functionType, inputNumber) {
    function increment(num) {
        return num + 1;
    }

    function decrement(num) {
        return num - 1;
    }

    function execute(func, number) {
        return func(number);
    }

    if (functionType == 'increment') {
        return execute(increment, inputNumber);
    } else if (functionType == 'decrement') {
        return execute(decrement, inputNumber);
    }
}