'use strict';
(function(){
  var Problem  = {};
  Problem = (function(){

    function Problem() {

    }

    // The complexity with be O(n)
    Problem.prototype.isUnique = function(str) {
      // Moors voting algorithm
      var max_index = 0,
          count = 1,
          length = str.length;

      for(var i = 1; i < length; i++) {
        if(str[max_index] === str[i]) {
          count++;
        }
        else {
          count--;
        }

        if(count === 0) {
          count = 1;
          max_index = i;
        }
      }
      if(max_index === length - 1 && str[0] != str[max_index]) {
        console.log("Unique!!")
      }
      else {
        console.log("Not uniquee..")
      }
    }

    return Problem;
  })();

  var prb = new Problem();
  prb.isUnique('abcdefghh');

})();
