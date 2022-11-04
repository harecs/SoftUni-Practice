function checkSign(numOne, numTwo, numThree) {
    let numbers = [];
    numbers.push(numOne, numTwo, numThree);

    let negativeNumsCount = 0;

    for (const number of numbers) {
        if (number < 0) {
            negativeNumsCount++;
        }
    }

    if (negativeNumsCount % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}