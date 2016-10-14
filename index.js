var fs = require('fs');
var moveRobots = require('./moveRobots');

fs.readFile('./input.txt', (err, data) => {
  console.log(moveRobots(data.toString()));
});
