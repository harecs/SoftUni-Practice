function extractIncreasingSubsequence(array) {
    let incresingSubsequence = [];

    array.reduce(checkIncreasing, Number.MIN_SAFE_INTEGER);

    return incresingSubsequence;

    function checkIncreasing(accumulator, number) {
        if (number >= accumulator) {
            incresingSubsequence.push(number);
            return number;
        }

        return accumulator;
    }
}