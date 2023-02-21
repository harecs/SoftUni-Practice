const describe = require('mocha').describe;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }    

    return "odd";
}

describe('isOddOrEven', function () {
    it('return undefined', function () {
        assert.equal(isOddOrEven(15), undefined);
    });
    it('return undefined', function () {
        assert.equal(isOddOrEven(['even']), undefined);
    });
    it('return even', function () {
        assert.equal(isOddOrEven('evenString'), 'even');
    });
    it('return odd', function () {
        assert.equal(isOddOrEven('oddString'), 'odd');
    });
    it('works with different strings in a row', function () {
        assert.equal(isOddOrEven('ha'), 'even');
        assert.equal(isOddOrEven('hahah'), 'odd');
    });
});