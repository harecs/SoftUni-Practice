function getFibonator() {
    let fibonacciSequence = [0];
    let n = 1;

    return function () {
        let currentFibonacciNumber =
            n < 2
                ? n
                : fibonacciSequence[n - 1] + fibonacciSequence[n - 2];

        fibonacciSequence.push(currentFibonacciNumber);
        n++;

        return currentFibonacciNumber
    }
}