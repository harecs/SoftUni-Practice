function scheduleMeetings(input) {
    let meetings = {};

    for (const line of input) {
        let [day, name] = line.split(' ');
        
        if (Object.keys(meetings).includes(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    Object.keys(meetings).forEach(day => {
        console.log(`${day} -> ${meetings[day]}`);
    });
}