function printProvision(stock, ordered) {
    let stockObject = {};

    for (let i = 0; i < stock.length; i+=2) {
        stockObject[stock[i]] = Number(stock[i+1]);
    }

    for (let i = 0; i < ordered.length; i+=2) {
        if (stockObject[ordered[i]] === undefined) {
            stockObject[ordered[i]] = 0;
        }

        stockObject[ordered[i]] += Number(ordered[i+1]);
    }

    for (const product in stockObject) {
        console.log(`${product} -> ${stockObject[product]}`);
    }
}