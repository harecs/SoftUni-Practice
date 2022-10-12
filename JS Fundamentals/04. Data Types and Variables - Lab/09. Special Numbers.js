function checkIfNumberIsSpecial(number) {
    for (let i = 1; i <= number; i++) {
        let currentNumberAsString = i.toString();
        let currentSum = 0;
        
        for (let j = 0; j < currentNumberAsString.length; j++) {
            currentSum += Number(currentNumberAsString[j]);
        }

        let isSpecial = (currentSum === 5) || (currentSum === 7) || (currentSum === 11);
        console.log(isSpecial? `${i} -> True` : `${i} -> False`);
    }
}