const describe = require('mocha').describe;
const assert = require('chai').assert;
const expect = require('chai').expect;

let mathEnforcer = {    
    addFive: function (num) {        
        if (typeof(num) !== 'number') {            
            return undefined;        
        }

        return num + 5;    
    },
    subtractTen: function (num) {        
        if (typeof(num) !== 'number') {            
            return undefined;        
        }

        return num - 10;    
    },    
    sum: function (num1, num2) {        
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {            
            return undefined;        
        }

        return num1 + num2;    
    }
};

describe('mathEnforces', function () {
    describe('addFive', function () {
        it('return undefined, because num is not a number', function () {
            assert.equal(mathEnforcer.addFive([4]), undefined);
        });
        it('return correct sum', function () {
            assert.equal(mathEnforcer.addFive(5), 10);
        });
        it('return correct sum', function () {
            assert.equal(mathEnforcer.addFive(-10), -5);
        });
        it('return correct sum (float number)', function () {
            expect(mathEnforcer.addFive(3.14)).to.closeTo(8.14, 0.01);
        });
    });

    describe('subtractTen', function () {
        it('return undefined, because num is not a number', function () {
            assert.equal(mathEnforcer.subtractTen([4]), undefined);
        });
        it('return correct result', function () {
            assert.equal(mathEnforcer.subtractTen(15), 5);
        });
        it('return correct result', function () {
            assert.equal(mathEnforcer.subtractTen(-15), -25);
        });
        it('return correct result (float number)', function () {
            expect(mathEnforcer.subtractTen(31.4)).to.closeTo(21.4, 0.01);
        });
    });

    describe('sum', function () {
        it('return undefined, because num1 is not a number', function () {
            assert.equal(mathEnforcer.sum([4], 2), undefined);
        });
        it('return undefined, because num2 is not a number', function () {
            assert.equal(mathEnforcer.sum(4, '2'), undefined);
        });
        it('return correct result', function () {
            assert.equal(mathEnforcer.sum(15, 5), 20);
        });
        it('return correct result', function () {
            assert.equal(mathEnforcer.sum(-15, - 5), -20);
        });
        it('return correct result (float number)', function () {
            expect(mathEnforcer.sum(3.14, 0.25)).to.closeTo(3.39, 0.01);
        });
    });
});