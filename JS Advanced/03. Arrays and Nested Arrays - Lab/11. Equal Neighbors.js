function printEqualNeighborsCount(matrix) {
    let count = 0;

    matrix.forEach((row, i) => {
        row.forEach((element, j) => {
            if (element === row[j + 1]) {
                count++;
            }

            if (matrix[i + 1] && element === matrix[i + 1][j]) {
                count++;
            }
        });
    });

    console.log(count);
}