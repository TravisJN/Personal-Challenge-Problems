//Compress a string by creating a method that returns a compressed form the of the given string.
//If the given string is longer after the compression is attempted, return the original string instead.
//Example: "aaabbcccc".stringCompression(); -> "a3b2c4"
//Example: "a".stringCompression(); -> "a" would be returned, not "a1"

String.prototype.stringCompression = function() {
  // Build a letter object with a counter as the value, letter as the key
  // Iterate through this again to maintain order and build a result string with the letter and value

  let strArray = this.split('');
  let letterObj = {};
  let result = '';

  for(let item of strArray){
    if(letterObj[item]) {
      letterObj[item] = letterObj[item] + 1;
    } else {
      letterObj[item] = 1;
    }
  }

  for(let key in letterObj){
    result += key + letterObj[key];
  }

  if(result.length > this.length){
    return this;
  } else {
    return result;
  }
};
