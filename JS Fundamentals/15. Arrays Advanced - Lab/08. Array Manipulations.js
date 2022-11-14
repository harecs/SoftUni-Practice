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
