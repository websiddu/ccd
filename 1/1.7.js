// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.

'use strict';
(function() {

var set0s = function(arr, m, n) {

  var result = JSON.parse(JSON.stringify(arr)),
      i = 0, j = 0, x = 0, y = 0;

  var _set0ss = function(k, l) {
    for(x = 0; x < m; x++) {
      result[x][l] = 0;
    }
    for(y = 0; y < n; y++) {
      result[k][y] = 0;
    }
  }

  for(i = 0; i < m; i++) {
    for(j = 0; j < n; j++) {
      if(arr[i][j] == 0) {
        _set0ss(i, j);
      }
    }
  }

  return result;
}

var array = [
  [1, 2, 3, 4],
  [2, 2, 0, 1],
  [3, 3, 1, 1],
  [3, 1, 1, 2]
]

console.log(set0s(array, 4, 4))

})();
