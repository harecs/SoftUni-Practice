function repeatString(string, n, repeatedString = '') {
    if (n < 1) {
        return repeatedString;
    }

    return repeatString(string, n - 1, repeatedString += string);
}

console.log(repeatString("ho", 3));
console.log(repeatString("SoftUni", 2));
repeatString("ho", 3);
repeatString("SoftUni", 2);