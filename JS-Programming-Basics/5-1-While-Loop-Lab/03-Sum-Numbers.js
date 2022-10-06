function sumNumbers(args) {
    let neededNumber = parseInt(args[0]);
    let sum = 0;
    let index = 1;
    let currentNumber = parseInt(args[index]);
    
    while (sum < neededNumber) {
        currentNumber = parseInt(args[index]);
        sum += currentNumber;
        index++;
    }

    console.log(sum);
}