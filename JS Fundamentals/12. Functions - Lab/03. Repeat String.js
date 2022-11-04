function repeatString(string, count) {
    let resultString = '';

    for (let i = 1; i <= count; i++) {
        resultString += string;
    }

    return resultString;
}

repeatString('abc', 3);