function calculateSubSum(inputArray, startIndex, endIndex) {
    if (!Array.isArray(inputArray)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex >= inputArray.length) {
        endIndex = inputArray.length - 1;
    }

    let subSum =
        inputArray
            .slice(startIndex, endIndex + 1)
            .map(Number)
            .reduce((a, x) => a + x, 0);

    return subSum;
}