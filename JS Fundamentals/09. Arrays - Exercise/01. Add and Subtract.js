function addAndSubtractArray(input) {
    let inputArray = input;
    let modifiedArray = inputArray;
    let inputArraySum = 0;
    let modifiedArraySum = 0;

    for (let i = 0; i < modifiedArray.length; i++) {
        inputArraySum += inputArray[i];

        if (modifiedArray[i] % 2 == 0) {
            modifiedArray[i] = modifiedArray[i] + i;
        } else {
            modifiedArray[i] = modifiedArray[i] - i;
        }
    }

    for (let i = 0; i < modifiedArray.length; i++) {
        modifiedArraySum += modifiedArray[i]; 
    }

    console.log(modifiedArray);
    console.log(inputArraySum);
    console.log(modifiedArraySum);
}