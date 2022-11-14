function manipulateTrain(commands) {

    let addWagon = (train, passengers) => train.push(passengers);
    
    function findWagonForPassengers(train, maxPassengersPerWagon, passengers) {
        for (let i = 0; i < train.length; i++) {
            if (maxPassengersPerWagon - train[i] >= passengers) {
                train[i] += passengers;
                break;
            }
        }

        return train;
    }

    let train = commands.shift().split(' ').map(Number);
    let maxPassengersPerWagon = commands.shift();

    for (const command of commands) {
        if (command.split(' ').shift() == 'Add') {
            let passengers = Number(command.split(' ').pop());
            addWagon(train, passengers);
        } else {
            let passengers = Number(command);
            train = findWagonForPassengers(train, maxPassengersPerWagon, passengers);
        }
    }

    let output = train.join(' ');
    console.log(output);
}