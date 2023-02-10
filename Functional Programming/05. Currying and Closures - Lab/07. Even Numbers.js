function evenNumbers(numbersArray) {
    const addCount = (function () {
        let count = 0;
        return function () {
            count++;
            return count;
        }
    })();

    let evenCount = 0;

    for (const number of numbersArray) {
        if (number % 2 == 0) {
            evenCount = addCount();
        }
    }

    return evenCount;
}

console.log(evenNumbers([1, 5, 100, 10]));
console.log(evenNumbers([12, 50, 100, 10]));