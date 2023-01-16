function processoddPositions(numbersArray) {
    let oddPositonsNumbers = [];

    for (let i = 1; i < numbersArray.length; i += 2) {
        oddPositonsNumbers.push(numbersArray[i]);
    }

    return oddPositonsNumbers.map(x => x * 2).reverse().join(' ');
}