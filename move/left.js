module.exports = function(state) {
    var moves = { 'N': 'W', 'E': 'N', 'S': 'E', 'W': 'S' };
    var orientation = moves[state.orientation]; 
    return Object.assign({}, state, { orientation });
}