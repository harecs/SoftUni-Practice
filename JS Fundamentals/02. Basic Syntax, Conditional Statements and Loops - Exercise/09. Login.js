function login(params) {
    let username = params[0];
    let userPassword = "";
    for (let i = username.length - 1; i >= 0; i--) {
        userPassword += `${username[i]}`;
    }

    let attempts = 1;
    
    while (attempts <= 4) {
        let currentPassword = params[attempts];
        if (currentPassword === userPassword) {
            console.log(`User ${username} logged in.`);
            blocked = false;
            break;
        } else if (attempts === 4) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
            attempts++;
        }
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);