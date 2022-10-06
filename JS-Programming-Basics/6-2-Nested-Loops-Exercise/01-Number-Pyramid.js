function printNumberPyramid(arg) {
    let n = parseInt(arg);
    let output = "";
    let currentNumber = 1;
    let printed = false;

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            
            if (currentNumber <= n) {
                output += `${currentNumber} `;
                currentNumber++;
            } else {
                printed = true;
            }
        }
        console.log(output);
        if (printed) {
            break;
        } else {
            output = "";
        } 
    }
}