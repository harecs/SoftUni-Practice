function splitByPascalCase(input) {
    let inputChars = input.split('');

    let resultArray = [];
    let currentWord = inputChars[0];

    for (let i = 1; i < inputChars.length; i++) {
        if (inputChars[i].charCodeAt(0) >= 65 && inputChars[i].charCodeAt(0) <= 90) {
            resultArray.push(currentWord);
            currentWord = inputChars[i];
        } else {
            currentWord += inputChars[i];
        }
    }
    
    resultArray.push(currentWord);

    console.log(resultArray.join(', '));
}