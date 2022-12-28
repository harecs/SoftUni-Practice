function serializeString(input) {
    let string = input.shift().split('');

    let serializedString = {};

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (serializedString[char] == undefined) {
            serializedString[char] = [i];
        } else {
            serializedString[char].push(i);
        }
    }

    for (const [char, indexes] of Object.entries(serializedString)) {
        console.log(`${char}:${indexes.join('/')}`);
    }
}