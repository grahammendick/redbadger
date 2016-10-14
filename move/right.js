module.exports = function(state) {
    var moves = {
        'N': 'E',
        'E': 'S',
        'S': 'W',
        'W': 'N'
    };
    var orientation = moves[state.orientation]; 
    return Object.assign({}, state, { orientation });
}