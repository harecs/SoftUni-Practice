function findEqualSums([arg1, arg2]) {
    let x1 = parseInt(arg1);
    let x2 = parseInt(arg2);
    let output = "";

    for (let currentNumber = x1; currentNumber <= x2; currentNumber++) {
        let evenSum = 0;
        let oddSum = 0;

        for (let position = 0; position < 6; position++) {
            let currentNumberString = currentNumber.toString();
            let currentChar = parseInt(currentNumberString[position]);

            if (position % 2 === 0) {
                evenSum += currentChar;
            } else {
                oddSum += currentChar;
            }
        }

        if (evenSum === oddSum) {
            output += `${currentNumber} `;
        }

        evenSum = 0;
        oddSum = 0;
    }

    console.log(output);
}