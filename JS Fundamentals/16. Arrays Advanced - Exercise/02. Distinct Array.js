function removeRepeatingElement(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        for (let j = numbers.length - 1; j > i; j--) {
            if (Number(numbers[i]) === Number(numbers[j])) {
                numbers.splice(j, 1);
            }
        }
    }

    console.log(numbers.join(' '));
}