function makeDictonary(input) {
    let dictonary = {};

    for (const wordJSON of input) {
        let word = JSON.parse(wordJSON);
        for (const key in word) {
            dictonary[key] = word[key];
        }
    }

    let sortedDictonary = {};

    sortedDictonary = Object.keys(dictonary)
    .sort()
    .reduce((accumulator, key) => {
        accumulator[key] = dictonary[key];

        return accumulator;
    }, {});

    for (const term in sortedDictonary) {
        console.log(`Term: ${term} => Definition: ${sortedDictonary[term]}`);
    }
}