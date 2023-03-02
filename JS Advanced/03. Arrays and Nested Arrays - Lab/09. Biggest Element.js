function findBiggestElement(matrixArray) {
    let biggestElements = [];

    for (const array of matrixArray) {
        biggestElements.push(Math.max.apply(null, array));
    }

    return Math.max.apply(null, biggestElements);
}