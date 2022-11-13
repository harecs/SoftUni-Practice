function printSmallestTwoNumbers(numbers) {
    sortedNumbers = numbers.sort((a, b) => a - b);
    smallestTwoNumbers = numbers.slice(0, 2);
    console.log(smallestTwoNumbers.join(' '));
}