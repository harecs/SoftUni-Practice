function createTownsRegistry(input) {
    let registry = {};

    for (const line of input) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);

        if (registry[town]) {
            registry[town] += population;
        } else {
            registry[town] = population;
        }
    }

    for (const town in registry) {
        console.log(`${town} : ${registry[town]}`);
    }
}