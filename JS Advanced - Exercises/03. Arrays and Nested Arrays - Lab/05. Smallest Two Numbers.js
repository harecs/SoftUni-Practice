function printSmallestTwoNumbers(numbersArray) {
    let smallestTwoNumbers = [];

    for (let i = 0; i < 2; i++) {
        let smallestNumber = Math.min.apply(null, numbersArray);
        smallestTwoNumbers.push(smallestNumber);

        let indexOfSmallestNumber = numbersArray.indexOf(smallestNumber);
        numbersArray.splice(indexOfSmallestNumber, 1);
    }

    console.log(smallestTwoNumbers.join(' '));
}