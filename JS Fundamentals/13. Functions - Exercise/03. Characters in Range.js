function printCharsInRange(firstChar, secondChar) {
    let startChar = '';
    let endChar = '';
    let output = '';

    if (secondChar.charCodeAt(0) < firstChar.charCodeAt(0)) {
        startChar = secondChar;
        endChar = firstChar;
    } else {
        startChar = firstChar;
        endChar = secondChar;
    }

    for (let i = startChar.charCodeAt(0) + 1; i <= endChar.charCodeAt(0) - 1; i++) {
        output += `${String.fromCharCode(i)} `;
    }

    console.log(output);
}