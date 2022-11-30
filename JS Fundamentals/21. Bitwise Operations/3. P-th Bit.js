function printBitAtPosition(number, position) {

    function convertToBinaryNotReversed(number) {
        let n = number;
        let binaryNumber = '';

        while (n != 0) {
            binaryNumber += n % 2;
            n = Math.trunc(n / 2);
        }
        binaryNumber += n % 2;
        return binaryNumber;
    }


    let binaryNumber = convertToBinaryNotReversed(number);

    
    let bitAtPosition = binaryNumber[position];

    if (bitAtPosition == undefined) {
        bitAtPosition = 0;
    }

    console.log(bitAtPosition);
}