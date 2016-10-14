var fs = require('fs');

module.exports = function(callback) {  
  fs.readFile('./input.txt', 'utf8', (err, data) => {
    var arr = data.split(/\r\n|\n/);
    var grid = /^(\d{1,2})\s(\d{1,2})$/.exec(arr[0]);
    var state = {
      grid: {x: +grid[1], y: +grid[2]},
      robots: []
    };
    for(var i = 1; i < arr.length; i+=3) {
      var position = /^(\d{1,2})\s(\d{1,2})\s([N|E|S|W])$/.exec(arr[i]);
      var moves = /^([F|R|L]+)$/.exec(arr[i+1]);
      state.robots.push({
        x: +position[1],
        y: +position[2],
        orientation: position[3],
        moves: moves[1].split('')
      });
    }
    callback(state);
  });
}
