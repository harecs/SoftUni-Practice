function replaceMissingCharAndCompare(firstString, char, secondString) {
    let stringWithReplacedChar = firstString.replace('_', char);
    let output = stringWithReplacedChar === secondString? 'Matched' : 'Not Matched';
    console.log(output);
}