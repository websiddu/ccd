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
      var length = str1.length;
      if(length == str2.length && length > 0) {
        var str11 = str1 + str1;
        return str11.indexOf(str2);
      }
    };

    return Problem;
  })();

  var prb = new Problem();
  console.log(prb.isRotation('abcd', 'cdab'));

})();
