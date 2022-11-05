function calculate(firstInteger, secondInteger, thirdInteger) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let sumFirstAndSecondInteger = sum(firstInteger, secondInteger);
    let result = subtract(sumFirstAndSecondInteger, thirdInteger);

    console.log(result);
}