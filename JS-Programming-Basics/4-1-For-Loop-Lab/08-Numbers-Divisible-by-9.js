function calculateNumsDiv9([arg1, arg2]) {
    let num1 = parseInt(arg1);
    let num2 = parseInt(arg2);
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }

    console.log("The sum: " + sum);

    for (let i = num1; i <= num2; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}