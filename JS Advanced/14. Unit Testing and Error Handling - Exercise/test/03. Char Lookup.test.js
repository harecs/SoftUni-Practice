const describe = require('mocha').describe;
const assert = require('chai').assert;

function lookupChar(string, index) {    
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {        
        return undefined;    
    }    if (string.length <= index || index < 0) {        
        return "Incorrect index";    
    }    
    
    return string.charAt(index);
}

describe('lookupChar', function () {
    it('return undefined (not String)', function () {
        assert.equal(lookupChar(['wordInArray'], 2), undefined);
    });
    it('return undefined (not Integer)', function () {
        assert.equal(lookupChar('word', 3.14), undefined);
    });
    it('return "Incorrect index"', function () {
        assert.equal(lookupChar('word', -3), 'Incorrect index');
        assert.equal(lookupChar('word', 999), 'Incorrect index');
    });
    it('return char at the index', function () {
        assert.equal(lookupChar('word', 3), 'd');
    });
});