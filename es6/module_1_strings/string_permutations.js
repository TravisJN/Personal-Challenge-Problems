//Given two strings, implement a method that determines if the input string is a permutation of the other

String.prototype.permutationCheck = function(str) {
  // Create an object with the letters of this as keys and count as value
  // iterate through str and check against object, decrementing count for each letter
  // if object[letter] = undefined or 0, it's not a permutation
  let strArray = this.split('');
  let permArray = str.split('');
  let letterObj = {};

  // Build letter object
  for(let item of strArray) {
    if(letterObj[item]) {
      letterObj[item] = letterObj[item] + 1;
    } else {
      letterObj[item] = 1;
    }
  }

  // Iterate through str checking against letterObj
  for(let item of permArray) {
    if(letterObj[item]) {
      letterObj[item] = letterObj[item] - 1;
    } else {
      return false;
    }
  }

  return true;
};
