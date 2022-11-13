function manipulateArray(commands) {
    let numbers = commands.shift().split(' ').map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNumber, secondNumber] = commands[i].split(' ');

        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        switch (command) {
            case 'Add':
                numbers.push(firstNumber);
                break;
            case 'Remove':
                numbers = numbers.filter(x => x !== firstNumber);
                break;
            case 'RemoveAt':
                numbers.splice(firstNumber, 1);
                break;
            case 'Insert':
                numbers.splice(secondNumber, 0, firstNumber);
                break;
        }
    }

    console.log(numbers.join(' '));
}

manipulateArray(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);
manipulateArray(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);