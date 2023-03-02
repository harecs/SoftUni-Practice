function convertTownsToJSON(inputArray) {
    inputArray.shift();
    let townsInJSON = [];

    for (let town of inputArray) {
        town = town.substring(2, (town.length - 2));
        let [name, latitude, longitude] = town.split(' | ');
        let townObj = {};

        townObj['Town'] = name;
        townObj['Latitude'] = Number(Number(latitude).toFixed(2));
        townObj['Longitude'] = Number(Number(longitude).toFixed(2));

        townsInJSON.push(townObj);
    }

    console.log(JSON.stringify(townsInJSON));
}