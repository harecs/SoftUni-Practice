function checkNumber(number) {
    let onlySameDigits = true;

    let numberDigits = number.toString().split('').map(Number);
    let firstDigit = numberDigits[0];
    let sumOfDigits = 0;

    for (const digit of numberDigits) {
        if (onlySameDigits && digit != firstDigit) {
            onlySameDigits = false;
        }

        sumOfDigits += digit;
    }

    console.log(onlySameDigits);
    console.log(sumOfDigits);
}