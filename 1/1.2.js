String.prototype.strReverse = function() {
  var length = this.length,
      strcopy = '';
  for(var i = length-1; i >= 0; i--) {
    strcopy+=this[i]
  }
  return strcopy;
}

console.log("  0011".strReverse())
