function airportSchedule(inputArray) {

    function convertToMinutes(timeAsString) {
        let [hours, minutes] = timeAsString.split(':');

        return (Number(hours) * 60) + Number(minutes);
    }

    function convertToTime(minutes) {
        let hours = Math.trunc(minutes / 60);
        let mins = minutes - (hours * 60);

        return `${hours}:${mins}`;
    }

    function calcTimeDiffInMins(currentTimeInMinutes, airplaneTimeInMinutes) {
        const twentyThreeHoursInMinutes = 1380;

        let biggerTime = Math.max(currentTimeInMinutes, airplaneTimeInMinutes);
        let smallerTime = Math.min(currentTimeInMinutes, airplaneTimeInMinutes);

        if (biggerTime > twentyThreeHoursInMinutes) {
            biggerTime -= twentyThreeHoursInMinutes;
        }

        return biggerTime - smallerTime;
    }

    function returnMessage(timeDifferenceInMinutes, airplaneName) {
        const twoHoursInMinutes = 120;

        if (timeDifferenceInMinutes > twoHoursInMinutes) {
            return [];
        } else if (timeDifferenceInMinutes < twoHoursInMinutes && timeDifferenceInMinutes >= 30) {
            return `The ${airplaneName} flight takes off in ${convertToTime(timeDifferenceInMinutes)} hours`;
        } else if (timeDifferenceInMinutes < 30) {
            return `Last call for flight ${airplaneName}`;
        }
    }

    return returnMessage(calcTimeDiffInMins(convertToMinutes(inputArray[0]), convertToMinutes(inputArray[2])), inputArray[1]);
}