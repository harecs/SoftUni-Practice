const describe = require('mocha').describe;
const assert = require('chai').assert;

function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('isSymmetric', function () {
    it('should return true', function () {
        let arr = [1, 2, 3, 3, 2, 1];
        let result = isSymmetric(arr);
        assert.equal(result, true);
    });
    it('should return false', function () {
        let arr = ['a', 'b', 123];
        let result = isSymmetric(arr);
        assert.equal(result, false);
    });
    it('should return false, because not an array', function () {
        let input = 'hahah';
        let result = isSymmetric(input);
        assert.equal(result, false);
    });
    it('should return false, because not an array', function () {
        let input = '[1, 2, 1]';
        let result = isSymmetric(input);
        assert.equal(result, false);
    });
    it('should return true', function () {
        let input = [''];
        let result = isSymmetric(input);
        assert.equal(result, true);
    });
});