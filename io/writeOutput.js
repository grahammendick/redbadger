module.exports = function(data) {
  console.log(data.reduce((output, position) => {
    output += `${position.x} ${position.y} ${position.orientation}`;
    if (position.lost)
      output += ' LOST';
    output += '\n';
    return output;
  }, ''));
}