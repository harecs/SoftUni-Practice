function reverseInPlace(array) {
    let output = '';

    for (let i = 0; i < Math.ceil(array.length / 2); i++) {
        let oldElementOnTheRight = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = oldElementOnTheRight;
    }

    for (const element of array) {
        output += element + ' ';
    }

    console.log(output);
}