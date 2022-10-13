function reverseString(input) {
    let inputString = String(input);
    let outputString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        let currentChar = inputString[i];
        outputString += currentChar;
    }

    console.log(outputString);
}