function searchForNumber(inputNumbers, manipulationIndexes) {

    function manipulateNumbers(numbers, taking, deleting) {
        let manipulatedNumbers = numbers.slice(0, taking);
        manipulatedNumbers.splice(0, deleting);

        return manipulatedNumbers;
    }

    function findOccurrences(nums, desiredNum) {
        let occurrences = 0;

        for (const num of nums) {
            if (num == desiredNum) {
                occurrences++;
            }
        }

        return occurrences;
    }

    let taking = manipulationIndexes.shift();
    let deleting = manipulationIndexes.shift();
    let desiredNumber = manipulationIndexes.shift();

    let numbers = manipulateNumbers(inputNumbers, taking, deleting);

    let occurrences = findOccurrences(numbers, desiredNumber);

    console.log(`Number ${desiredNumber} occurs ${occurrences} times.`);
}