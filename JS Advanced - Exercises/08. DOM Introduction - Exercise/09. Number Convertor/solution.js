function solve() {
    addConvertToOptions();

    document.getElementsByTagName('button')[0].addEventListener('click', convertNumber);

    function convertNumber() {
        let decimalNumber = Number(document.getElementById('input').value);
        let formatToConvertTo = document.getElementById('selectMenuTo').value;
        let outputElement = document.getElementById('result');

        if (formatToConvertTo == 'binary') {
            outputElement.value = decimalNumber.toString(2);
        } else if (formatToConvertTo == 'hexadecimal') {
            outputElement.value = decimalNumber.toString(16).toUpperCase();
        }
    }

    function addConvertToOptions() {
        let binaryOptionElement = document.createElement('option');
        binaryOptionElement.value = 'binary';
        binaryOptionElement.textContent = 'Binary';

        let hexadecimalOptionElement = document.createElement('option');
        hexadecimalOptionElement.value = 'hexadecimal';
        hexadecimalOptionElement.textContent = 'Hexadecimal';

        document.getElementById('selectMenuTo').appendChild(binaryOptionElement);
        document.getElementById('selectMenuTo').appendChild(hexadecimalOptionElement);
    }
}