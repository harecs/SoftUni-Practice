function cutAndReverse(input) {
    let halfIndex = input.length / 2;
    let firstHalf = input.substring(0, halfIndex);
    let secondHalf = input.substring(halfIndex);

    let reversedFirstHalf = firstHalf.split('').reverse().join('');
    let reversedSecondHalf = secondHalf.split('').reverse().join('');

    console.log(reversedFirstHalf);
    console.log(reversedSecondHalf);
}