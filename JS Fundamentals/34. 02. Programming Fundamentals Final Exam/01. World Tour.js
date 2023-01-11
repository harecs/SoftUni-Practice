function tour(input) {
    let tour = input.shift().trim();

    let currentLine = input.shift().trim();

    while (currentLine != 'Travel') {
        let [command, info1, info2] = currentLine.split(':');

        if (command == 'Add Stop' && Number(info1) >= 0 && Number(info1) < tour.length) {
            tour = tour.substring(0, Number(info1)) + info2 + tour.substring(Number(info1));
            console.log(tour);
        } else if (command == 'Remove Stop') {
            if (Number(info1) >= 0 && Number(info1) < tour.length && Number(info2) >= 0 && Number(info2) < tour.length) {
                tour = tour.substring(0, Number(info1)) + tour.substring(Number(info2) + 1);
            }
            console.log(tour);
        } else if(command == 'Switch') {
            while (tour.indexOf(info1) > -1) {
                tour = tour.replace(info1, info2);
            }
            console.log(tour);
        }

        currentLine = input.shift().trim();
    }

    console.log(`Ready for world tour! Planned stops: ${tour}`);
}