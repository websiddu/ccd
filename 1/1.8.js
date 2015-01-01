// Assume you have a method isSubstring which checks if one word is a substring
// of another. Given two strings, s i and s2, write code to check if s2 is a
// rotation of si using only one call to isSubstring
// (e.g.,"waterbottle"is a rota- tion of"erbottlewat").

(function(){
  var Problem = {};

  Problem = (function() {

    function Problem() {

    }

    Problem.prototype.isRotation = function(str1, str2) {
      var str1_len = str1.length,
          flag = false;
      for(var i = 0; i < str1_len; i++) {
        if(str2.indexOf(str1.substring(i, str1_len)) >= 0 && str2.indexOf(str1.substring(0, i)) >= 0) {
          console.log("Yes..");
          flag = true;
          break;
        }
      }
      if(flag == false) {
        console.log("not..");
      }
    };

    return Problem;
  })();

  var prb = new Problem();
  prb.isRotation('abcd', 'cdab');

})();
