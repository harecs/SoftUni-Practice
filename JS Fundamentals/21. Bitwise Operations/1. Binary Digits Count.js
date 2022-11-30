function countBinaryDigits(number, desiredBinaryDigit) {
    let binaryNumber = number.toString(2);
    let count = 0;

    for (const digit of binaryNumber) {
        if (digit == desiredBinaryDigit) {
            count++;
        }
    }

    console.log(count);
}