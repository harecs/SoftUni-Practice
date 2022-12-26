function generatePassword(input) {
    let firstString = input[0].toLowerCase();
    let secondString = input[1].toLowerCase();
    let word = input[2].toUpperCase().split('');

    let password = firstString.concat(secondString).split('');

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            password[i] = word.shift();

            if (word.length == 0) {
                word = input[2].toUpperCase().split('');
            }
        }
    }

    password = password.reverse().join('');

    console.log(`Your generated password is ${password}`);
}