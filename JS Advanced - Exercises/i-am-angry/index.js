const assert = require("mocha").assert;
const  = require("chai").assert;


function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

describe('sum', function () {
    it('return the sum of all elements in the array', function () {
        let arr = [5, 5, 5, 1, 4, 100];
        let result = sum(arr);
        assert.equal(result, 120);
    });
    it('return sum of parsed elements', function () {
        let arr = ['1', '2', '3'];
        let result = sum(arr);
        assert.equal(result, 6);
    });
    it('return 0 value', function () {
        let arr = [0, -0, +0, '-0', '+0'];
        let result = sum(arr);
        assert.equal(result, 0);
    })
})