function printNthElement(array) {
    let step = Number(array[array.length - 1]);
    let resultArray = [];
    
    for (let i = 0; i < array.length - 1; i += step) {
        resultArray.push(array[i]);
    }

    console.log(resultArray.join(' '));
}