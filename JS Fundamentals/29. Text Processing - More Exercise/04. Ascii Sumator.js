function asciiSumator(input) {
    let firstCharCode = input[0].charCodeAt(0);
    let secondCharCode = input[1].charCodeAt(0);
    let string = input[2];

    let smallerCharCode = Math.min(firstCharCode, secondCharCode);
    let biggerCharCode = Math.max(firstCharCode, secondCharCode);

    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        let currentCharCode = string.charCodeAt(i);

        if (currentCharCode > smallerCharCode && currentCharCode < biggerCharCode) {
            sum += currentCharCode;
        }
    }

    console.log(sum);
}