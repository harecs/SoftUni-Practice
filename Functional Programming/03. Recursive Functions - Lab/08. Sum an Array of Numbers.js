function sum(numericArray, summedNumbers = 0, i = numericArray.length - 1) {
    if (i < 0) {
        return summedNumbers;
    }

    return sum(numericArray, summedNumbers += Number(numericArray[i]), i -= 1);
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([-1, -2, -3, -4, -5]));