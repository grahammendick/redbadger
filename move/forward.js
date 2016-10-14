module.exports = function(state) {
    var moves = {
        'N': (x, y) => ({x: x, y: y + 1}),
        'E': (x, y) => ({x: x + 1, y: y}),
        'S': (x, y) => ({x: x, y: y - 1}),
        'W': (x, y) => ({x: x - 1, y: y})
    }
    var position = moves[state.orientation](state.x, state.y);
    return Object.assign({}, state, position);
}