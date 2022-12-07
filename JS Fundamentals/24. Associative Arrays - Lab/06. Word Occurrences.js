function printWordOccurrencesCount(input) {
    let occurrences = new Map();

    for (const word of input) {
        if (!occurrences.has(word)) {
            occurrences.set(word, 1);
        } else {
            let oldCount = Number(occurrences.get(word));
            let newCount = oldCount + 1;
            occurrences.set(word, newCount);
        }
    }

    let sortedOccurrences = Array.from(occurrences.entries()).sort((a, b) => b[1] - a[1]);

    for (const kvp of sortedOccurrences) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}