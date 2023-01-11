function calculateFruitPrice(typeOfFruit, grams, pricePerKilogam) {
    let weightInKilograms = grams / 1000;
    let totalPrice = weightInKilograms * pricePerKilogam;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${typeOfFruit}.`);
}