function rotateArray(array, rotatesCount) {
    for (let i = 0; i < rotatesCount; i++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}