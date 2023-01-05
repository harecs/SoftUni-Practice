function calculateTotalFurniture(input) {
    let inputString = input.join(' ');

    let pattern = /\>{2}(?<item>[A-Z][\w]+)\<{2}(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;

    let boughtFurniture = inputString.matchAll(pattern);
    let totalPrice = 0;

    console.log('Bought furniture:');

    for (const furniture of boughtFurniture) {
        console.log(furniture.groups.item);

        totalPrice += Number(furniture.groups.quantity) * Number(furniture.groups.price);
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}