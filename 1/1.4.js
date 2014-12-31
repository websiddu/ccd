String.prototype.replaceSpaces = function() {
  var length = this.length;
  for(var i = 0; i < length; i++) {
    if(this[i] == ' ') {
      this[i] = "%20"
    }
  }
  return this.toString();
}


console.log("This is my Name".replace(/ /ig, '%20'));
