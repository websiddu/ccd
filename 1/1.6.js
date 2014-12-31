// Given an image represented by an NxN matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees.
// Can you do this in place?

var rotate = function(arr, n) {

var matrix = [],
    i = 0,
    j = 0;
  for( i = 0; i < n; i++) {
    for(j = 0; j < n; j++) {
      matrix[j] == undefined ? matrix[j] = [] : ''
      matrix[j].push(arr[i][j])
    }
  }
  return matrix
}

var array = [
  [1, 2, 3, 5],
  [6, 7, 8, 9],
  [13, 12, 11, 10],
  [14, 15, 16, 17]
];

console.log(rotate(array, 4))



