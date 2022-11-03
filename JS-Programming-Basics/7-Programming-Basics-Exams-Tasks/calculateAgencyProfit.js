function calculateAgencyProfit([arg1, arg2, arg3, arg4, arg5]) {
    let name = arg1;
    let normalTickets = parseInt(arg2);
    let kidsTickets = parseInt(arg3);
    let netPriceTicket = parseFloat(arg4);
    let taxPrice = parseFloat(arg5);
    let totalPrice = (netPriceTicket + taxPrice) * normalTickets + (netPriceTicket * 0.30 + taxPrice) * kidsTickets;
    let profit = totalPrice * 0.20;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}