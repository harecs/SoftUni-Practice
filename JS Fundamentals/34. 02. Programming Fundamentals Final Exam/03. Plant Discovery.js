function discoverPlants(input) {
    let n = input.shift();

    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->');

        plants[plant] = [rarity, 0, 0];
    }

    let command = input.shift();



    while (command != 'Exhibition') {
        let [action, info] = command.split(': ');
        let [plant, infoNumber] = info.split(' - ');

        if (plants[plant] == undefined) {
            console.log('error');
        } else {
            switch (action) {
                case 'Rate':
                    plants[plant][1] += Number(infoNumber);
                    plants[plant][2] += 1;
                    break;
                case 'Update':
                    infoSplit = info.split(' - ');
                    plants[plant][0] = Number(infoNumber);
                    break;
                case 'Reset':
                    plants[plant][1] = 0;
                    plants[plant][2] = 0;
                    break;
            }
        }

        command = input.shift();
    }

    console.log('Plants for the exhibition:');

    for (const key of Object.keys(plants)) {
        let rating = 0;

        if (plants[key][1] != 0 || plants[key][2] != 0) {
            rating = Number(plants[key][1]) / Number(plants[key][2]);
        }

        console.log(`- ${key}; Rarity: ${plants[key][0]}; Rating: ${rating.toFixed(2)}`);
    }
}