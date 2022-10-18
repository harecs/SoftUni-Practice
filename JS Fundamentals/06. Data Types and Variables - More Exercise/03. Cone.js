function calculateConeVolumeAndTotalSurfaceArea(radius, height) {
    let coneVolume = Math.PI * (radius ** 2) * (height / 3);
    let coneTotalSurfaceArea = Math.PI * radius * (radius + Math.sqrt((height ** 2) + (radius ** 2)));

    console.log(`volume = ${coneVolume.toFixed(4)}`);
    console.log(`area = ${coneTotalSurfaceArea.toFixed(4)}`);
}