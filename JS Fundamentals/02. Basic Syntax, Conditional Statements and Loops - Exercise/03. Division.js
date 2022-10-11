function checkDivision(number) {
    let output = "The number is divisible by ";

    if (number % 10 === 0) {
        output += "10";
    } else if (number % 7 === 0) {
        output += "7";
    } else if (number % 6 === 0) {
        output += "6";
    } else if (number % 3 === 0) {
        output += "3";
    } else if (number % 2 === 0) {
        output += "2";
    } else {
        output = "Not divisible";
    }

    console.log(output);
}