function replaceMissingWords(input) {
    let text = input[0];
    let words = input[1];

    words.sort((a, b) => b.length - a.length);
    
    for (const word of words) {
        text = text.replace('_'.repeat(word.length), word);
    }

    console.log(text);
}