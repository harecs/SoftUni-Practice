function checkPassword(args) {
    let username = args[0];
    let password = args[1];
    let index = 2;
    let enteredPassword = args[index];

    while (enteredPassword !== password) {
        index++;
        enteredPassword = args[index];
    }

    console.log(`Welcome ${username}!`);
}