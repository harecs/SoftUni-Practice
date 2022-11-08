function modifyNumber(number) {
    
    function calculateAverageOfAllDigits(numberString) {
        let average = 0;

        for (const char of numberString) {
            let digit = Number(char);
            average += digit;
        }

        average /= numberString.length;

        return average;
    }

    let numberString = number.toString();
    let averageOfAllDigits = calculateAverageOfAllDigits(numberString);

    while (averageOfAllDigits < 5) {
        numberString += '9';
        averageOfAllDigits = calculateAverageOfAllDigits(numberString);
    }

    console.log(numberString);
}