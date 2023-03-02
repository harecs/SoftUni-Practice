function sortArray(numericArray, typeOfSorting) {
    const compareFunction =
        typeOfSorting == 'asc'
            ? (a, b) => a - b
            : (a, b) => b - a;

    return numericArray.sort(compareFunction);
}