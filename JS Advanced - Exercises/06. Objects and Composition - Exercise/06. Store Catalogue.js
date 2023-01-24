function printStoreCatalogue(inputArray) {
    let catalogue = {};
    let currentGroupInitial = '';

    for (const inputString of inputArray) {
        let [product, price] = inputString.split(' : ');

        catalogue[product] = Number(price);
    }

    let sortedCatalogue = new Set(Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0])));


    for (const product of sortedCatalogue) {
        if (product[0][0] != currentGroupInitial) {
            currentGroupInitial = product[0][0];

            console.log(currentGroupInitial);
        }

        console.log(`  ${product[0]}: ${product[1]}`);
    }
}