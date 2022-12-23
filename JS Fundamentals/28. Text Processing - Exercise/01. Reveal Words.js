function revealWords(wordsToReveal, text) {
    let words = wordsToReveal.split(', ');
    let textArray = text.split(' ');

    words.forEach(word => {
        for (let i = 0; i < textArray.length; i++) {
            const element = textArray[i];
            
            if (element == '*'.repeat(word.length)) {
                textArray[i] = word;
            }
        }
    });

    console.log(textArray.join(' '));
}