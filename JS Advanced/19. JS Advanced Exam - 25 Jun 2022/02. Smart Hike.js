class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (Object.keys(this.goals).includes(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;

        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        let neededResources = time * 10;

        if (!Object.keys(this.goals).includes(peak)) { // maybe without ifelseif ???
            throw new Error(`${peak} is not in your current goals`);
        } else if (this.resources == 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        } else if (this.resources - neededResources < 0) {
            return `You don't have enough resources to complete the hike`;
        } else {
            this.resources -= neededResources;

            this.listOfHikes.push({
                peak,
                time,
                difficultyLevel
            });

            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }

    rest(time) {
        let newResources = time * 10;
        this.resources += newResources;

        if (this.resources >= 100) {
            this.resources = 100;

            return 'Your resources are fully recharged. Time for hiking!';
        }

        return `You have rested for ${time} hours and gained ${newResources}% resources`;
    }

    showRecord(criteria) {
        let output = '';

        if (this.listOfHikes.length == 0) {
            output = `${this.username} has not done any hiking yet`;
        } else if (criteria == 'all') {
            output += 'All hiking records:';

            for (const hikeObj of this.listOfHikes) {
                output += `\n${this.username} hiked ${hikeObj.peak} for ${hikeObj.time} hours`;
            }
        } else if (criteria == 'easy' || criteria == 'hard') {
            let criteriaHikes = [];

            for (const hikeObj of this.listOfHikes) {
                if (hikeObj.difficultyLevel == criteria) {
                    criteriaHikes.push(hikeObj);
                }
            }

            if (criteriaHikes.length == 0) {
                output = `${this.username} has not done any ${criteria} hiking yet`;
            } else {
                criteriaHikes.sort((a, b) => a.time - b.time);
                output = `${this.username}'s best ${criteria} hike is ${criteriaHikes[0].peak} peak, for ${criteriaHikes[0].time} hours`;
            }
        }

        return output;
    }
}