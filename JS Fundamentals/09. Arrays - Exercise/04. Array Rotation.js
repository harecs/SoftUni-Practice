function rotateArray(inputArray, rotations) {
    let rotatingArray = inputArray;
    let outputArray = [];

    for (let i = 0; i < rotations; i++) {
        rotatingArray.push(rotatingArray[i]);
    }

    for (let i = rotations; i < rotatingArray.length; i++) {
        outputArray.push(rotatingArray[i]);
    }

    console.log(outputArray.join(' '));
}