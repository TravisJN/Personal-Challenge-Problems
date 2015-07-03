//Create a function to determine if a string has all unique characters

let unique = (str) => {
<<<<<<< HEAD:es6/module_1/unique.js
  let strArray = str.split('');
  let obj = {};
  for(var item of strArray){
    if(obj[item]){
      return false;
    }
    obj[item] = true;
  }
  return true;
=======

>>>>>>> master:es6/module_1_strings/unique.js
};

//EXTRA CREDIT: Implement the unique problem without creating additioanl data structures

let unique_extra = (str) => {
<<<<<<< HEAD:es6/module_1/unique.js
  for(var i = 0; i < str.length; i++) {
    for(var j = 0; j < str.length; j++) {
      if(str[i] === str[j]){
        return false;
      }
    }
  }
  return true;
=======

>>>>>>> master:es6/module_1_strings/unique.js
};
