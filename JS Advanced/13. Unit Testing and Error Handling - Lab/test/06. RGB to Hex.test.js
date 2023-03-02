const describe = require('mocha').describe;
const assert = require('chai').assert;


function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('rgbToHexColor', function () {
    it('return HEX color', function () {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });

    it('return HEX color', function () {
        assert.equal(rgbToHexColor(0, -0, +0), '#000000');
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor(256, 256, 256), undefined);
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor('256', 256, [256]), undefined);
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor(-100, -100, -100), undefined);
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor({ r: 100, g: 100, b: 100 }), undefined);
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor([45, 45, 45]), undefined);
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor(10.1, 10.2, 10.3), undefined);
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor('1', '1', '1'), undefined);
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor(300, -300, 0), undefined);
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor([34, 34, 34]), undefined);
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor(20, 20), undefined);
    });

    it('return undefined', function () {
        assert.equal(rgbToHexColor(20, 20, 20, 20), '#141414');
    });
});