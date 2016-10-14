var fs = require('fs');
var moveRobots = require('./moveRobots');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  console.log(moveRobots(data));
});
