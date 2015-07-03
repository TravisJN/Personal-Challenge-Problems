//Compress a string by creating a method that returns a compressed form the of the given string. 
//If the given string is longer after the compression is attempted, return the original string instead.
//Example: "aaabbcccc".stringCompression(); -> "a3b2c4" 
//Example: "a".stringCompression(); -> "a" would be returned, not "a1"

//Writing a traditional function declaration here is necessary
//In Babel 'this' is not attached to window and will transpile into undefined!
String.prototype.stringCompression = function() {

} 
;//Given two strings, implement a method that determines if the input string is a permutation of the other

//Writing a traditional function declaration here is necessary
//In Babel this is not attached to window and will transpile into undefined!
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
;//In this problem we want to check to see if two strings are rotations of each other
//You may only use one call to the given method .substring()

//Example: stringRotation("thomas", "omasth"); -> true
//Example: stringRotation("thomas", "smotha");-> false

let stringRotation = (str1, str2) => {

};

;//Create a function to determine if a string has all unique characters

let unique = (str) => {
  let strArray = str.split('');
  let obj = {};
  for(var item of strArray){
    if(obj[item]){
      return false;
    }
    obj[item] = true;
  }
  return true;
};

//EXTRA CREDIT: Implement the unique problem without creating additioanl data structures

let unique_extra = (str) => {
  for(var i = 0; i < str.length; i++) {
    for(var j = 0; j < str.length; j++) {
      if(str[i] === str[j]){
        return false;
      }
    }
  }
  return true;
};
