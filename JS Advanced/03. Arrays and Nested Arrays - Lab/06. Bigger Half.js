function printBiggerHalf(numbersArray) {
    numbersArray.sort((a, b) => a - b);
    let biggerHalf = numbersArray.slice(Math.floor(numbersArray.length / 2));
    return biggerHalf;
}