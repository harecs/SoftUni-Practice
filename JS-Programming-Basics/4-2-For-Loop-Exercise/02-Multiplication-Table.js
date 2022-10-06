function printMultiplicationTable([input]) {
    let number = parseInt(input);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${number} = ${i * number}`);
    }
}