function printFactorialDivision(firstNumber, secondNumber) {

      function calculateFactorial(number) {
            let factorial = 1;

            for (let i = 1; i <= number; i++) {
                  factorial *= i;
            }

            return factorial;
      }

      let firstFactorial = calculateFactorial(firstNumber);
      let secondFactorial = calculateFactorial(secondNumber);
      let factorialDivision = firstFactorial / secondFactorial;
      
      console.log(factorialDivision.toFixed(2));
}