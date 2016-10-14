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

describe('Move Right at 1 1 N', () => {
    it('should go to 1 1 E', () => {
        var input = `2 2
1 1 N
R`;
        var output = moveRobots(input);
        assert.equal(output, '1 1 E');
    })
});

describe('Move Right at 1 1 E', () => {
    it('should go to 1 1 S', () => {
        var input = `2 2
1 1 E
R`;
        var output = moveRobots(input);
        assert.equal(output, '1 1 S');
    })
});

describe('Move Right at 1 1 S', () => {
    it('should go to 1 1 W', () => {
        var input = `2 2
1 1 S
R`;
        var output = moveRobots(input);
        assert.equal(output, '1 1 W');
    })
});

describe('Move Right at 1 1 W', () => {
    it('should go to 1 1 N', () => {
        var input = `2 2
1 1 W
R`;
        var output = moveRobots(input);
        assert.equal(output, '1 1 N');
    })
});

describe('Move Left at 1 1 N', () => {
    it('should go to 1 1 W', () => {
        var input = `2 2
1 1 N
L`;
        var output = moveRobots(input);
        assert.equal(output, '1 1 W');
    })
});

describe('Move Left at 1 1 E', () => {
    it('should go to 1 1 N', () => {
        var input = `2 2
1 1 E
L`;
        var output = moveRobots(input);
        assert.equal(output, '1 1 N');
    })
});

describe('Move Left at 1 1 S', () => {
    it('should go to 1 1 E', () => {
        var input = `2 2
1 1 S
L`;
        var output = moveRobots(input);
        assert.equal(output, '1 1 E');
    })
});

describe('Move Left at 1 1 W', () => {
    it('should go to 1 1 S', () => {
        var input = `2 2
1 1 W
L`;
        var output = moveRobots(input);
        assert.equal(output, '1 1 S');
    })
});

describe('Move Off at 2 2 N', () => {
    it('should go to 2 2 N LOST', () => {
        var input = `2 2
2 2 N
F`;
        var output = moveRobots(input);
        assert.equal(output, '2 2 N LOST');
    })
});

describe('Move Off at 2 2 E', () => {
    it('should go to 2 2 E LOST', () => {
        var input = `2 2
2 2 E
F`;
        var output = moveRobots(input);
        assert.equal(output, '2 2 E LOST');
    })
});

describe('Move Off at 0 0 S', () => {
    it('should go to 0 0 S LOST', () => {
        var input = `2 2
0 0 S
F`;
        var output = moveRobots(input);
        assert.equal(output, '0 0 S LOST');
    })
});

describe('Move Off at 0 0 W', () => {
    it('should go to 0 0 W LOST', () => {
        var input = `2 2
0 0 W
F`;
        var output = moveRobots(input);
        assert.equal(output, '0 0 W LOST');
    })
});
