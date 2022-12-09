function printOddOccurrences(inputString) {
    let input = inputString.toLowerCase().split(' ');

    let oddOccurrences = new Map();

    input.forEach(element => {
        if (oddOccurrences.has(element)) {
            oddOccurrences.set(element, oddOccurrences.get(element) + 1);   
        } else {
            oddOccurrences.set(element, 0);
        }
    });

    let output = '';

    for (const kvp of Array.from(oddOccurrences.entries())) {
        if (kvp[1] % 2 != 1) {
            output += kvp[0] + ' ';
        }
    }

    console.log(output);
}