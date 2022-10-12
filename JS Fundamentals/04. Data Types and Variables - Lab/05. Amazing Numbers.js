function checkIfNumberIsAmazing(number) {
    let sum = 0;
    let isAmazing = false;

    let numberAsString = number.toString();
    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);        
    }

    let sumAsString = sum.toString();
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == 9) {
            isAmazing = true;
            break;
        }
    }

    console.log(`${number} Amazing? ${isAmazing ? 'True' : 'False'}`);
}