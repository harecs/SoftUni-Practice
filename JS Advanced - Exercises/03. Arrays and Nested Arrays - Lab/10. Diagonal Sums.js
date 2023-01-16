function printDiagonalSums(matrix) {
    let primarySum = 0;
    let secondarySum = 0;
    let index = 0;

    matrix.forEach(row => {
        primarySum += row[index];
        secondarySum += row[row.length - 1 - index];

        index++;
    });

    console.log(primarySum + ' ' + secondarySum);
}