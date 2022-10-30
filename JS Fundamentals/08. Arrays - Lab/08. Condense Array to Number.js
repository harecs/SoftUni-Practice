function condenseArrayToNumber(numbers) {
   let arrayForCondensing = numbers;

   for (let i = 1; i < numbers.length; i++) {
        for (let j = 0; j < arrayForCondensing.length - i; j++) {
            arrayForCondensing[j] = arrayForCondensing[j] + arrayForCondensing[j + 1];
        }
   }

   console.log(arrayForCondensing[0]);
}