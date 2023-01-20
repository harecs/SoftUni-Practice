function factory(libraryOfFunctions, arrayOfOrders) {
    let resultArray = [];

    for (const order of arrayOfOrders) {
        let resultObject = {
            name: order.template.name
        };

        for (const part of order.parts) {
            resultObject[part] = libraryOfFunctions[part];
        }

        resultArray.push(resultObject);
    }

    return resultArray;
}