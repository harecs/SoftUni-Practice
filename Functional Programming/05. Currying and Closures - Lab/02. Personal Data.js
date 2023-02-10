function personalData(firstName) {
    return function (lastName) {
        return function (age) {
            return `${firstName} ${lastName}, ${age}`;
        }
    }
}


console.log(personalData('Peter')('Ivanov')('18'));
console.log(personalData('Ivan')('Petrov')('88'));