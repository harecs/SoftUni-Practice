function countStringOccurrences(string, word) {
    let index = string.indexOf(` ${word} `);
    let count = 0;

    if (string.startsWith(`${word} `)) {
        count++;
    }
    if (string.endsWith(` ${word}`)) {
        count++;    
    }

    while (index > -1) {
        count++;

        index = string.indexOf(` ${word} `, index + 1);
    }

    console.log(count);
}