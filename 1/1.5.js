// Implement a method to perform basic string compression using the counts of
// repeated characters. For example, the string aabcccccaaa would become a2blc5a3.
// If the "compressed" string would not become smaller than the orig- inal string,
// your method should return the original string.


// Running time - O(n)
// Space complexity - O(n)
var strCompressed = function(str) {
  var counts = {}, result = '';
  for(key in str) {
    if(counts[str[key]] === undefined) {
      counts[str[key]] = 0;
    }
    counts[str[key]]++;
  }

  for(key in counts) {
    result+=key+counts[key];
  }

  return result;
}

console.log(strCompressed("aaabcccaa"));
