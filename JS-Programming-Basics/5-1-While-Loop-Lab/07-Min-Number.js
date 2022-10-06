function findMinNumber(args) {
    let index = 0;
    let inputLine = args[index];
    let minNumber = 9999999999;

    while (inputLine !== "Stop") {
        inputLine = args[index];
        let number = parseInt(inputLine);

        if (number < minNumber) {
            minNumber = number;
        }

        index++;
    }

    console.log(minNumber);
}