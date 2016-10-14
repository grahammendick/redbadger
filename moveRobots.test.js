var assert = require('assert');
var moveRobots = require('./moveRobots')

describe('Move Forward at 1 1 N', () => {
    it('should go to 1 2 N', () => {
        var input = `2 2
1 1 N
F`;
        var output = moveRobots(input);
        assert.equal(output, '1 2 N');
    })
});

describe('Move Forward at 1 1 E', () => {
    it('should go to 2 1 E', () => {
        var input = `2 2
1 1 E
F`;
        var output = moveRobots(input);
        assert.equal(output, '2 1 E');
    })
});

describe('Move Forward at 1 1 S', () => {
    it('should go to 1 0 S', () => {
        var input = `2 2
1 1 S
F`;
        var output = moveRobots(input);
        assert.equal(output, '1 0 S');
    })
});

describe('Move Forward at 1 1 W', () => {
    it('should go to 0 1 W', () => {
        var input = `2 2
1 1 W
F`;
        var output = moveRobots(input);
        assert.equal(output, '0 1 W');
    })
});

