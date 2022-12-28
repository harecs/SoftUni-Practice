function calculateValueOfString(input) {
    let string = input[0];
    let lettersCase = input[1];
    let valueOfString = 0;

    switch (lettersCase) {
        case 'UPPERCASE':
            valueOfString = calculateUpperCase(string);
            break;
        case 'LOWERCASE':
            valueOfString = calculateLowerCase(string);
            break;
    }

    console.log(`The total sum is: ${valueOfString}`);

    function calculateUpperCase(string) {
        let value = 0;

        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                value += string.charCodeAt(i);
            }
        }

        return value;
    }

    function calculateLowerCase(string) {
        let value = 0;

        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                value += string.charCodeAt(i);
            }
        }

        return value;
    }
}