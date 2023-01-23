function createCaloriesObject(array) {
    let caloriesObject = {};

    for (let i = 0; i < array.length; i += 2) {
        caloriesObject[array[i]] = Number(array[i + 1]);
    }

    console.log(caloriesObject);
}