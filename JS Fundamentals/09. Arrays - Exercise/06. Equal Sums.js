function findEqualSums(numbers) {
    let areEqualSums = false;
    let indexEqualSums = 0;

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += numbers[j];
        }

        for (let j = i + 1; j < numbers.length; j++) {
            rightSum += numbers[j];
        }
        
        if (leftSum == rightSum) {
            areEqualSums = true;
            indexEqualSums = i;
            break;
        }
    }

    if (areEqualSums) {
        console.log(indexEqualSums);
    } else {
        console.log('no');
    }
}