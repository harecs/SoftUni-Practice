function sumFirstAndLastArrayElements(numbersArray) {
    let firstNumber = Number(numbersArray[0]);
    let lastNumber = Number(numbersArray[numbersArray.length - 1]);
    let sum = firstNumber + lastNumber;

    console.log(sum);
}