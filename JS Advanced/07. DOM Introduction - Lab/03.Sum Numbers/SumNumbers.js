function calc() {
    let firstNumber = Number(document.getElementById('num1').value);
    let secondNumber = Number(document.getElementById('num2').value);
    
    let sumElement = document.getElementById('sum');
    sumElement.value = firstNumber + secondNumber;
}