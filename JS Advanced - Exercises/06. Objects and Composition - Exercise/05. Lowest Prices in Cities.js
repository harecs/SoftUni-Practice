function findLowestPricesInCities(input) {
    let products = {};

    for (const line of input) {
        let [city, product, price] = line.split(' | ');
        price = Number(price);

        if (products[product] == undefined || price < products[product].price) {
            products[product] = {
                price: 0,
                city: ''
            };
            products[product].price = price;
            products[product].city = city;
        }
    }

    for (const product of Object.entries(products)) {
        console.log(`${product[0]} -> ${product[1].price} (${product[1].city})`);
    }
}