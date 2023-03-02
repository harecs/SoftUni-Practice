function createArrayFromCommands(commands) {
    let resultArray = [];

    for (let i = 1; i <= commands.length; i++) {
        if (commands[i - 1] == 'add') {
            resultArray.push(i);
        } else {
            resultArray.pop();
        }
    }

    if (resultArray.length > 0) {
        console.log(resultArray.join('\n'));
    } else {
        console.log('Empty');
    }
}