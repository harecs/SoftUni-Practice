function createNonDecreasingArray(inputArray) {
    let resultArray = [];
    resultArray.push(inputArray[0]);
    

    for (let i = 1; i < inputArray.length; i++) {
        let currentNumber = Number(inputArray[i]);

        if (currentNumber >= resultArray[resultArray.length - 1]) {
            resultArray.push(currentNumber);
        }
    }


    console.log(resultArray.join(' '));
}