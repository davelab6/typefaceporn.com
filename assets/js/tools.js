$.fn.random = function() {
    var randomIndex = Math.floor(Math.random() * this.length);
    return this[randomIndex];
};

function getLetters(string) {
  var letters = [];
  var str = string.replace(/\s/g, '');
  for (x = 0, length = str.length; x < length; x++) {
    var l = str.charAt(x);
    if (letters.indexOf(l) < 0) {
      letters.push(l);
    }
  }
  return letters.join('');
}