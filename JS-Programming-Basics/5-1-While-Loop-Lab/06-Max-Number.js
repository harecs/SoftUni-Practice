function findMaxNumber(args) {
    let index = 0;
    let inputLine = args[index];
    let maxNumber = -9999999999;

    while (inputLine !== "Stop") {
        inputLine = args[index];
        let number = parseInt(inputLine);

        if (number > maxNumber) {
            maxNumber = number;
        }

        index++;
    }

    console.log(maxNumber);
}