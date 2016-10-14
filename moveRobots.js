var forward = require('./move/forward');
var right = require('./move/right');
var left = require('./move/left');

module.exports = function(grid, robots) {
  var moves = { 'F': forward, 'R': right, 'L': left };
  return robots
    .reduce((state, robot) => {
      state.newPositions.push(
        robot.moves
          .reduce((prevPosition, move) => {
            if (prevPosition.lost)
              return prevPosition;
            var newPosition = moves[move](prevPosition);
            newPosition = checkLost(state, prevPosition, newPosition);
            if (newPosition.lost)
              state.lost.push(newPosition);
            return newPosition;
          }, robot)
        );
      return state;
    }, { grid: grid, newPositions: [], lost: [] }).newPositions;
}

function checkLost(state, prevPosition, newPosition) {
  if (newPosition.x < 0 || newPosition.x > state.grid.x 
    || newPosition.y < 0 || newPosition.y > state.grid.y) {
    newPosition = Object.assign({}, prevPosition);
    newPosition.lost = state.lost.filter((position) => (
        position.x === prevPosition.x && position.y === prevPosition.y
    )).length === 0;
  }
  return newPosition;
}