function findNumbers(input) {
    let numbers = input.split(' ').map(Number);
    let average = 0;

    for (const number of numbers) {
        average += number;       
    }

    average /= numbers.length;

    let foundNumbers = [];

    for (const number of numbers) {
        if (number > average) {
            foundNumbers.push(number);
        }
    }
    
    foundNumbers.sort((a, b) => b - a);
    foundNumbers = foundNumbers.slice(0, 5);

    if (foundNumbers.length == 0) {
        console.log('No');
    } else {
        console.log(foundNumbers.join(' '));
    }
}

findNumbers('10 20 30 40 50');
findNumbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
findNumbers('1');
findNumbers('-1 -2 -3 -4 -5 -6');