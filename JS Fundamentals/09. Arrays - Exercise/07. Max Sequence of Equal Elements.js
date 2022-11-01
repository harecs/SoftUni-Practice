function findMaxSequence(input) {
    let maxSequence = [];
    let counter = 0;
    let previousElement = null;

    for (let i = input.length - 1; i >= 0; i--) {
        let currentElement = input[i];

        if (currentElement == previousElement) {
            counter++;
        } else {
            counter = 0;
        }

        if (counter >= maxSequence.length - 1) {
            maxSequence = [];
            for (let j = 0; j <= counter; j++) {
                maxSequence.push(currentElement);
            }
        }

        previousElement = currentElement;
    }

    console.log(maxSequence.join(' '));
}