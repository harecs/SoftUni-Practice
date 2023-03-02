function printLastKNumbersSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let lastKNumbers = sequence.slice(-k);

        let sumOfLastKNumbers = lastKNumbers.reduce((a, x) => a + x, 0);

        sequence.push(sumOfLastKNumbers);
    }

    return sequence;
}