function printResult(number) {
    
    function calculateOddDigitsSum(number) {
        let numberAsString = number.toString();
        let sum = 0;
    
        for (let i = 0; i < numberAsString.length; i++) {
            let currentDigit = Number(numberAsString[i]);
    
            if (currentDigit % 2 !== 0) {
                sum += currentDigit;
            }
        }
    
        return sum;
    }

    function calculateEvenDigitsSum(number) {
        let numberAsString = number.toString();
        let sum = 0;
    
        for (let i = 0; i < numberAsString.length; i++) {
            let currentDigit = Number(numberAsString[i]);
    
            if (currentDigit % 2 === 0) {
                sum += currentDigit;
            }
        }
    
        return sum;
    }

    let oddSum = calculateOddDigitsSum(number);
    let evenSum = calculateEvenDigitsSum(number);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}