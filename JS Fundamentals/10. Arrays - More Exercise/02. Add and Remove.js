function addAndRemoveElements(commands) {
    let resultArray = [];

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];

        if (currentCommand == 'add') {
            resultArray.push(i + 1);
        } else if (currentCommand == 'remove'){
            resultArray.pop(i - 1);
        }
    }

    if (resultArray.length != 0) {
        console.log(resultArray.join(' '));
    } else {
        console.log('Empty');
    }
}