function printTownInfosAsObjects(townsTable) {
    for (const townTable of townsTable) {
        let town = townTable.split(' | ');
        let name = town.shift();
        let latitude = Number(town.shift()).toFixed(2);
        let longitude = Number(town.shift()).toFixed(2);

        let townAsObject = {
            town: name,
            latitude: latitude,
            longitude: longitude
        };

        console.log(townAsObject);
    }
}