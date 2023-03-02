const describe = require('mocha').describe;
const should = require('chai').should();

function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

describe('createCalculator', function () {
    it('return object with properties add, subtract, get', function () {
        let calc = createCalculator();

        calc.should.be.an('object');
        calc.should.haveOwnProperty('add');
        calc.should.haveOwnProperty('subtract');
        calc.should.haveOwnProperty('get');
    });

    it('return value', function () {
        let calc = createCalculator();
        calc.add(1);
        calc.subtract(1);
        let result = calc.get();

        result.should.be.equal(0);
    });

    it('return value', function () {
        let calc = createCalculator();
        calc.add('100');
        calc.subtract('50');
        let result = calc.get();

        result.should.be.equal(50);
    });

    it('return value', function () {
        let calc = createCalculator();
        calc.add(-100);
        calc.subtract(100);
        let result = calc.get();

        result.should.be.equal(-200);
    });

    it('return NaN', function () {
        let calc = createCalculator();
        calc.add({});
        calc.subtract([100]);
        let result = calc.get();

        result.should.be.NaN;
    });
});