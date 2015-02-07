var spawn = require('child_process').spawn;
var TextToWave = function(text) {
  var child = spawn("text2wave");
  child.stdin.write(text);
  child.stdin.end();
  return child.stdout;
};

module.exports = TextToWave;
