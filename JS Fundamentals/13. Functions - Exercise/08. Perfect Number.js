function checkIfNumberIsPerfect(number) {
    
    function findAllProperPositiveDivisors(number) {
        let properDivisors = [];

        for (let divisor = 1; divisor <= Math.floor(number / 2); divisor++) {
            if (number % divisor === 0) {
                properDivisors.push(divisor);
            }
        }

        return properDivisors;
    }

    function calculateAliquotSum(divisors) {
        let sum = 0;

        for (const divisor of divisors) {
            sum += divisor;
        }

        return sum;
    }

    properPositiveDivisors = findAllProperPositiveDivisors(number);
    aliquotSum = calculateAliquotSum(properPositiveDivisors);

    if (number === aliquotSum) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}