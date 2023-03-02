function cookByNumbers(num, firstCmd, secondCmd, thirdCmd, fourthCmd, fifthCmd) {
    let number = Number(num);
    let commands = [];
    commands.push(firstCmd, secondCmd, thirdCmd, fourthCmd, fifthCmd);

    for (const command of commands) {
        switch (command) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= (0.20 * number)
                break;
        }

        console.log(number);
    }
}