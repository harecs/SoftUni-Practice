function deserializeInputToString(input) {
    let serializedInput = input.slice(0, input.length - 1);
    let deserializedInput = [];

    for (const line of serializedInput) {
        let splitLine = line.split(':');
        let char = splitLine.shift();
        let indexes = splitLine.shift().split('/');

        for (const index of indexes) {
            deserializedInput[index] = char;
        }
    }

    console.log(deserializedInput.join(''));
}