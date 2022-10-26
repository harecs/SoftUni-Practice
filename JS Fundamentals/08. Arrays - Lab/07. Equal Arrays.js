function checkIfArraysAreEqual(firstArray, secondArray) {
    let sum = 0;
    let areEqual = true;
    let differenceIndex = 0;
    let output = '';

    for (let i = 0; i < firstArray.length; i++) {
        firstArray[i] = Number(firstArray[i]);
        secondArray[i] = Number(secondArray[i]);
    }

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] === secondArray[i]) {
            sum += firstArray[i];
        } else {
            areEqual = false;
            differenceIndex = i;
            break;
        }
    }

    if (areEqual) {
        output = `Arrays are identical. Sum: ${sum}`;
    } else {
        output = `Arrays are not identical. Found difference at ${differenceIndex} index`;
    }

    console.log(output);
}