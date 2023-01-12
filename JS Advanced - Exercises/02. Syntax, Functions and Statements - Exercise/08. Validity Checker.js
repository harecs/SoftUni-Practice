function printIfValid(x1, y1, x2, y2) {
    checkIfValid(x1, y1, 0, 0);
    checkIfValid(x2, y2, 0, 0);
    checkIfValid(x1, y1, x2, y2);

    function checkIfValid(pX1, pY1, pX2, pY2) {
        let isValid = Math.sqrt((pX2 - pX1) ** 2 + (pY2 - pY1) ** 2) % 1 == 0;
        let status = isValid ? 'valid' : 'invalid';

        console.log(`{${pX1}, ${pY1}} to {${pX2}, ${pY2}} is ${status}`);
    }
}