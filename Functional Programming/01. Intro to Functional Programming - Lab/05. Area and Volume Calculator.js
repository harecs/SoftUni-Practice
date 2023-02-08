function solve(dataAsJSON) {
    function areaAndVolumeCalculator(areaFunction, volumeFunction, jsonData) {
        let data = JSON.parse(jsonData);
        let arrayOfResultObjects = [];

        for (const obj of data) {
            let areaAndVolumeObject = {
                area: areaFunction.call(obj),
                volume: volumeFunction.call(obj)
            };

            arrayOfResultObjects.push(areaAndVolumeObject);
        }

        return arrayOfResultObjects;
    }

    function areaFn() {
        return Math.abs(this.width * this.depth);
    }

    function volumeFn() {
        return Math.abs(this.width * this.depth * this.height);
    }

    return areaAndVolumeCalculator(areaFn, volumeFn, dataAsJSON);
}