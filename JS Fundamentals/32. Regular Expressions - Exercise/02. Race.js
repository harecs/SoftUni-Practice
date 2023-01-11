function printRaceResults(input) {
    let participantsList = input.shift().split(', ');
    input.pop();
    let runningInfo = input.slice();

    let runners = {};
    let patternForNameChars = /[A-Za-z]/g;
    let patternForDistanceChars = /\d/g;

    for (const info of runningInfo) {
        let name = info.match(patternForNameChars).join('');

        if (participantsList.includes(name)) {
            let distances = info.match(patternForDistanceChars).map(Number);

            if (runners[name] == undefined) {
                runners[name] = 0;
            }
            
            distances.forEach(distance => runners[name] += distance);
        }
    }

    sortedRunnersArrays = Object.entries(runners).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedRunnersArrays[0][0]}`);
    console.log(`2nd place: ${sortedRunnersArrays[1][0]}`);
    console.log(`3rd place: ${sortedRunnersArrays[2][0]}`);
}