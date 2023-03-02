function printEvenPositionElements(array) {
    let output = '';

    for (let i = 0; i < array.length; i+=2) {
        output += array[i] + ' ';
    }

    console.log(output.trimEnd());
}