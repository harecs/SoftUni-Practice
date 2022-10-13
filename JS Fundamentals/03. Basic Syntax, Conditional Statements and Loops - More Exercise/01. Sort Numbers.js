function sortNumbersDescendingOrder(firstNumber, secondNumber, thirdNumber) {
   let numbers = [firstNumber, secondNumber, thirdNumber];
   let sortedNumbers = numbers.sort((a, b) => b - a);
   
   for (let i = 0; i < 3; i++) {
      console.log(sortedNumbers[i]);
   }
}