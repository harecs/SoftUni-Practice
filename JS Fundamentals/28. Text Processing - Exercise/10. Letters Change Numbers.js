function calculate(input) {
    let strings = input.split(' ');
    let result = 0;

    strings = strings.filter(element => {
        if (element != '') {
            return element;
        }
    });

    for (const string of strings) {
        let splitString = string.split('');
        let beforeLetter = splitString.shift();
        let afterLetter = splitString.pop();
        let number = Number(splitString.join(''));

        let beforLetterPosition = 0;
        let afterLetterPosition = 0;

        if (beforeLetter.charCodeAt(0) < 97) {
            beforLetterPosition = beforeLetter.charCodeAt(0) - 64;

            number /= beforLetterPosition;
        } else {
            beforLetterPosition = beforeLetter.charCodeAt(0) - 96;

            number *= beforLetterPosition;
        }

        if (afterLetter.charCodeAt(0) < 97) {
            afterLetterPosition = afterLetter.charCodeAt(0) - 64;

            number -= afterLetterPosition;
        } else {
            afterLetterPosition = afterLetter.charCodeAt(0) - 96;

            number += afterLetterPosition;
        }

        result += number;
    }

    console.log(result.toFixed(2));
}