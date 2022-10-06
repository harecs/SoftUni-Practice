function calculateExpenses(input) {
    let tax = parseInt(input[0]);
    let shoes = tax * 0.60;
    let clothes = shoes * 0.80;
    let ball = clothes * 0.25;
    let accessories = ball * 0.20;
    let totalExpenses = tax + shoes + clothes + ball + accessories;

    console.log(totalExpenses);
}