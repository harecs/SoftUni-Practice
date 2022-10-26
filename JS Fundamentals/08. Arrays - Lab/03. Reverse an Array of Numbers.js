function reverseAnArrayOfNumbers(elementsCount, numbersArray) {
    let reversedArray = [];
    let output = '';

    for (let i = elementsCount - 1; i >= 0; i--) {
        reversedArray[elementsCount - i - 1] = numbersArray[i];
    }

    for (const number of reversedArray) {
        output += number + ' ';
    }

    console.log(output);
}