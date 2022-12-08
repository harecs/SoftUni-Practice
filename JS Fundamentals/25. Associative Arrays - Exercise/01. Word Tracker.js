function printTrackedWords(input) {
    
    let selectWordsForTracking = arr => arr.shift().split(' ');

    function trackWords(words, input) {
        let occurrences = {};

        for (const word of words) {
            occurrences[word] = 0;
        }

        for (const word of words) {
            for (const string of input) {
                if (string == word) {
                    occurrences[word]++;
                }
            }
        }

        return occurrences;
    }

    let sortTrackedWords = words => Array.from(Object.entries(words)).sort((a, b) => b[1] - a[1]);

    let wordsForTracking = selectWordsForTracking(input);
    let trackedWords = trackWords(wordsForTracking, input);
    let sortedTrackedWords = sortTrackedWords(trackedWords);

    for (const kvp of sortedTrackedWords) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}