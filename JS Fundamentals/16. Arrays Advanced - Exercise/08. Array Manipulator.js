function arrayManipulator(input, manipulations) {
    
    function add(array, index, element) {
        array.splice(index, 0, Number(element));
        return array;
    }

    function addMany(array, index, elements) {
        for (let i = index; i < index + elements.length; i++) {
            const element = elements[i - index];
            array.splice(i, 0, element);           
        }

        return array;
    }

    function containsPrint(array, element) {
        let firstOccurrence = -1;
        let desiredElement = Number(element);

        for (let i = 0; i < array.length; i++) {
            const currentElement = array[i];

            if (currentElement == desiredElement) {
                firstOccurrence = i;
                break;
            }
        }

        console.log(firstOccurrence);
    }

    function remove(array, index) {

        if (index >= 0 && index < array.length) {
            array.splice(index, 1);
        }

        return array;
    }

    function shift(array, positions) {
        for (let i = 0; i < positions; i++) {
            const currentElement = Number(array[0]);
            array.shift();
            array.push(currentElement);            
        }
    }

    function sumPairs(array) {
        let summedArray = [];

        if (array.length % 2 !== 0) {
            array.push(0);
        }

        for (let i = 0; i < array.length; i += 2) {
            const firstElement = Number(array[i]);
            const secondElement = Number(array[i + 1]);
            let sum = firstElement + secondElement;
            summedArray.push(sum);
        }

        return summedArray;
    }

    function print(array) {
        console.log(`[ ${array.join(', ')} ]`);
    }

    let numbers = input.map(Number);

    for (let manipulation of manipulations) {
        manipulation = manipulation.split(' ');
        let command = manipulation.shift();
        let commandArgs = manipulation.map(Number);
        let isPrinted = false;

        switch (command) {
            case 'add':
                numbers = add(numbers, commandArgs[0], commandArgs[1]);
                break;
            case 'addMany':
                numbers = addMany(numbers, commandArgs.shift(), commandArgs);
                break;
            case 'contains':
                containsPrint(numbers, commandArgs[0]);
                break;
            case 'remove':
                numbers = remove(numbers, commandArgs[0]);
                break;
            case 'shift':
                shift(numbers, commandArgs[0]);
                break;
            case 'sumPairs':
                numbers =  sumPairs(numbers);
                break;
            case 'print':
                print(numbers);
                isPrinted = true;
                break;
        }

        if (isPrinted) {
            break;
        }
    }
}
