function checkNumbersArray(numbersInput) {
    
    function convertInputToNumbers(inputArray) {
        let numbers = [];

        for (const currentInput of inputArray) {
            numbers.push(Number(currentInput));
        }

        return numbers;
    }

    function printNumbersOnNewLines(numbers) {
        for (const number of numbers) {
            console.log(number);
        }
    }

    let numbers = convertInputToNumbers(numbersInput);
    let resultArray = [];


    for (const number of numbers) {
        if (number < 0) {
            resultArray.unshift(number);
        } else {
            resultArray.push(number);
        }
    }

    printNumbersOnNewLines(resultArray);
}