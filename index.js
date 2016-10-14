var readInput = require('./io/readInput');
var writeOutput = require('./io/writeOutput');
var moveRobots = require('./moveRobots');

readInput((data) => {
  writeOutput(moveRobots(data.grid, data.robots));
});
