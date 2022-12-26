function replaceRepeatingChars(input) {
    let inputArray = input.split('');
    let result = inputArray[0];

    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] != inputArray[i - 1]) {
            result += inputArray[i];
        }
    }

    console.log(result);
}