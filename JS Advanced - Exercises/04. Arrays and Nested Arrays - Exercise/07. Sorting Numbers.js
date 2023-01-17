function sortNumbers(array) {
    let ascendingNumbers = array.slice().sort((a, b) => a - b);
    let descendingNumbers = array.slice().sort((a, b) => b - a);

    let sortedNumbers = [];
    
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            sortedNumbers.push(ascendingNumbers.shift());
        } else {
            sortedNumbers.push(descendingNumbers.shift());
        }
    }

    return sortedNumbers;
}