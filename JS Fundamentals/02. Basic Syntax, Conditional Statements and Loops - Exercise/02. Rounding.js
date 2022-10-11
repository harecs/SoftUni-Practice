function roundNumber(number, roundingPrecision) {
    if (roundingPrecision > 15) {
        roundingPrecision = 15;
    }

    number = number.toFixed(roundingPrecision);
    let result = parseFloat(number);
    console.log(result);
}