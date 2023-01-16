function printSortedArrayBySign(numbersArray) {
    let result = [];

    for (const number of numbersArray) {
        if (number >= 0) {
            result.push(number);
        } else {
            result.unshift(number);
        }
    }

    console.log(result.join('\n'));
}