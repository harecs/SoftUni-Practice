function sumPrimeNonPrimeNumbers(params) {
    let input = params;
    let lineIndex = 0;
    let currentLine = input[lineIndex];
    let primeSum = 0;
    let nonPrimeSum = 0;
    let prime = true;

    while (currentLine !== "stop") {
        let currentNumber = parseInt(currentLine);
        
        if (currentNumber < 0) {
            console.log("Number is negative.");
        } else {
            for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
                if (currentNumber % i === 0) {
                    prime = false;
                    break;
                }
            }

            if (prime) {
                primeSum += currentNumber;
            } else {
                nonPrimeSum += currentNumber;
            }
        } 

        lineIndex++;
        currentLine = input[lineIndex];
        prime = true;

        if (currentLine === "stop") {
            break;
        }
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}