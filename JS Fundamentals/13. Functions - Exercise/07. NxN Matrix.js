function printMatrix(number) {
    
    function printRow(n) {
        let row = '';

        for (let i = 0; i < n; i++) {
            row += `${n} `;
        }

        return row;
    }

    for (let i = 0; i < number; i++) {
        console.log(printRow(number));
    }
}