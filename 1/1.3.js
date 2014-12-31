String.prototype.permutation = function(str) {
  return this.toString().split().sort().join() === str.split().sort().join();
}

console.log("abcdef".permutation('abcdef'));
