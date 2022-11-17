function printDesiredSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let n = input.shift();
    let desiredTypeList = input.pop();
    let songsAsInput = input.slice();
    let songsAsObjects = [];

    for (let i = 0; i < n; i++) {
        let currentSong = songsAsInput[i].split('_');
        let typeList = currentSong.shift();
        let name = currentSong.shift();
        let time = currentSong.shift();

        let currentSongAsObject = new Song(typeList, name, time);

        if (desiredTypeList == 'all') {
            console.log(currentSongAsObject.name);
        } else if (desiredTypeList == currentSongAsObject.typeList) {
            console.log(currentSongAsObject.name);
        }
    }
}