function createAssemblyLine() {

    function hasClima(carObject) {
        carObject.temp = 21;
        carObject.tempSettings = 21;

        carObject.adjustTemp = () => (carObject.temp < carObject.tempSettings) ? carObject.temp++ : carObject.temp--;
    }

    function hasAudio(carObject) {
        carObject.currentTrack = {
            name: null,
            artist: null
        };

        carObject.nowPlaying = function() {
            if (carObject.currentTrack.name) {
                console.log(`Now playing '${carObject.currentTrack.name}' by ${carObject.currentTrack.artist}`);
            }
        };
    }

    function hasParktronic(carObject) {

        carObject.checkDistance = function(distance) {
            if (distance < 0.1) {
                console.log('Beep! Beep! Beep!');
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log('Beep! Beep!');
            } else if (distance >= 0.25 && distance < 0.5) {
                console.log('Beep!');
            } else {
                console.log('');
            }
        };
    }

    return {hasClima, hasAudio, hasParktronic};
}