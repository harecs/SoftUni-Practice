function stringRev(string, n = 0) {
    if (n == string.length) {
        return '';
    }

    return string[string.length - 1 - n] += stringRev(string, n + 1);
}

console.log(stringRev("SoftUni"));
console.log(stringRev("ho"));