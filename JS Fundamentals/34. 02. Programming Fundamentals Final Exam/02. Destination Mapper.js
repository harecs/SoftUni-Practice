function destinationMapper(input) {
    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;

    let destinations = input.matchAll(pattern);
    let destinationsArray = [];
    let travelPoints = 0;

    for (const match of destinations) {
        destinationsArray.push(match.groups.destination);
        travelPoints += match.groups.destination.length;
    }

    console.log(`Destinations: ${destinationsArray.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}