function checkForPalindromeIntegers(integers) {
    
    function reverseInteger(integer) {
        let integerAsString = integer.toString();
        let reversedIntegerAsString = '';

        for (let i = integerAsString.length - 1; i >= 0; i--) {
            reversedIntegerAsString += integerAsString[i];
        }

        return Number(reversedIntegerAsString);
    }

    for (const integer of integers) {
        let reversedInteger = reverseInteger(integer);
        let isPalindrome = integer === reversedInteger;

        if (isPalindrome) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}