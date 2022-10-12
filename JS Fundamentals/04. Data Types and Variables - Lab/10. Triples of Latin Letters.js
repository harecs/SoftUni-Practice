function printTriplesOfLatinLetters(numberAsString) {
    let number = Number(numberAsString);

    for (let i = 97; i < 97 + number; i++) {
        for (let j = 97; j < 97 + number; j++) {
            for (let k = 97; k < 97 + number; k++) {
                console.log(`${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}`);
            }
        }
    }
}