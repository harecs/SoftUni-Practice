function modifyArray(input) {
    
    function swap(array, firstIndex, secondIndex) {
        let firstIndexNumber = array[firstIndex];
        let secondIndexNumber = array[secondIndex];

        array[firstIndex] = secondIndexNumber;
        array[secondIndex] = firstIndexNumber;

        return array;
    }

    function multiply(array, firstIndex, secondIndex) {
        let firstNumber = array[firstIndex];
        let secondNumber = array[secondIndex];
        let result = firstNumber * secondNumber;
        array[firstIndex] = result;

        return array;
    }

    function decrease(array) {
        for (let i = 0; i < array.length; i++) {
            array[i]--;
        }

        return array;
    }

    let numbers = input.shift().split(' ').map(Number);
    input.pop();
    let commands = input.slice();

    for (let command of commands) {
        command = command.split(' ');
        let action = command.shift();
        let firstIndex = Number(command.shift());
        let secondIndex = Number(command.shift());

        switch (action) {
            case 'swap':
                numbers = swap(numbers, firstIndex, secondIndex);
                break;
            case 'multiply':
                numbers = multiply(numbers, firstIndex, secondIndex);
                break;
            case 'decrease':
                numbers = decrease(numbers);                
                break;
        }
    }

    console.log(numbers.join(', '));
}

modifyArray( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);
modifyArray([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);