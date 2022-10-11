function printAndSum(start, end) {
    let numberSequence = "";
    let sum = 0;

    for (let i = start; i <= end; i++) {
        numberSequence += `${i} `;
        sum += i;
    }

    console.log(numberSequence);
    console.log(`Sum: ${sum}`);
}