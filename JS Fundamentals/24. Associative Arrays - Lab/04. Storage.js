function printStorage(input) {
    let storage = new Map();

    for (const line of input) {
        let [product, quantity] = line.split(' ');

        if (storage.has(product)) {
            let newQuantity = storage.get(product) + Number(quantity);
            storage.set(product, newQuantity);
        } else {
            storage.set(product, Number(quantity));
        }
    }

    for (const kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}