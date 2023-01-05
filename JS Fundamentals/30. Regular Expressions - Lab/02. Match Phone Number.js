function matchAndPrintPhoneNumbers(input) {
    let pattern = /\+359([ -])2\1[0-9]{3}\1[0-9]{4}\b/g;
    let validPhoneNumbers = input.toString().match(pattern);

    console.log(validPhoneNumbers.join(', '));
}