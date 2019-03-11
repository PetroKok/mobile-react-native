var assert = require('assert');

describe('Test array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not in array', function () {
            assert.equal([1, 2, 3].indexOf(3), -1);
        });
    });
});