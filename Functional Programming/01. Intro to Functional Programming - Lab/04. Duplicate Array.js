function duplicate(input) {
    let inputArray = input.slice();
    let duplicatedArray = [];

    for (const line of inputArray) {
        duplicatedArray.push(line);
        duplicatedArray.push(line);
    }

    return duplicatedArray
}