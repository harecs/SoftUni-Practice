function printFirstBit(number) {
    let binaryNumber = number.toString(2);
    binaryNumber = (binaryNumber >> 1).toString(2);
    console.log(binaryNumber[binaryNumber.length - 1]);
}