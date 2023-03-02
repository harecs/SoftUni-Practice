function breakfastRobot() {
    let ingredients = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { carbohydrate: 10, protein: 10, fat: 10, flavour: 10 }
    }

    return function (input) {
        let [command, ingredientOrRecipeInput, quantityInput] = input.split(' ');

        let managerMethods = {
            restock: restock,
            prepare: prepare,
            report: () => `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
        }

        return managerMethods[command](ingredientOrRecipeInput, quantityInput);

        function restock(ingredient, quantityAsString) {
            ingredients[ingredient] += Number(quantityAsString);
            return 'Success';
        }

        function prepare(recipeType, quantity) {
            let recipe = recipes[recipeType];

            for (const ingredient of Object.keys(recipe)) {
                if (ingredients[ingredient] <= recipe[ingredient] * quantity) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            Object.keys(recipe)
                .forEach(ingredient => ingredients[ingredient] -= recipe[ingredient] * quantity);

            return 'Success';
        }
    }
}