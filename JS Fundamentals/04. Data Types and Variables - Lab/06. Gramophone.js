function checkGramophonePlateRotations(band, album, song) {
    let rotations = ((album.length * band.length) * song.length / 2) / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}