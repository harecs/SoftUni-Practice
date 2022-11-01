function rotateArray(array) {
    let rotations = Number(array[array.length - 1]);
    let rotatedArray = [];
    
    for (const index in array) {
        if (index == array.length - 1) {
            break;
        } else {
            rotatedArray.push(array[index]);
        }
    }

    for (let i = 1; i <= rotations; i++) {
        let lastElement = rotatedArray[rotatedArray.length - 1];
        rotatedArray.unshift(lastElement);
        rotatedArray.pop();
    }

    console.log(rotatedArray.join(' '));
}