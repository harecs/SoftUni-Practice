function convertToObject(jsonString) {
    let object = JSON.parse(jsonString);

    for (const prop in object) {
        console.log(`${prop}: ${object[prop]}`);
    }
}