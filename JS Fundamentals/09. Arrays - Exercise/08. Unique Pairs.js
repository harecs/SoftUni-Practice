function findUniquePairs(array, uniqueNumber) {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {

            let currentSum = array[i] + array[j];

            if (currentSum == uniqueNumber) {       
                    result += `${array[i]} ${array[j]}\n`;
            }
        }
    }

    console.log(result);
}