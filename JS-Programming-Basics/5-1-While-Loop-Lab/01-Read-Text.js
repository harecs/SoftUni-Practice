function readText(args) {
    let index = 0;
    let currentWord = args[0];

    while (currentWord !== "Stop") {
        console.log(currentWord);
        index++;
        currentWord = args[index];
    }
}