module.exports = function(data) {
  return data.reduce((output, position) => {
    output += `${position.x} ${position.y} ${position.orientation}`;
    if (position.lost)
      output += ' LOST';
    output += '\n';
    return output;
  }, '').slice(0, -1);
}