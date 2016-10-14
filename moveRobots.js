var parseInput = require('./parseInput');
var formatOutput = require('./formatOutput');
var forward = require('./move/forward');
var right = require('./move/right');
var left = require('./move/left');

/**
 * Uses the Redux pattern: 'F', 'L' and 'R' are the actions,
 * the contents of the move folder are the reducers and the
 * position of the robot is the state.
 * This is all inside a larger 'robots' reducer so that the
 * 'lost' grid positions can be shared between robots. 
 */
module.exports = function(input) {
  var moves = { 'F': forward, 'R': right, 'L': left };
  var data = parseInput(input);
  var output = data.robots
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
    }, { grid: data.grid, newPositions: [], lost: [] }).newPositions;
    return formatOutput(output);
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