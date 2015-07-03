//Create a function to determine if a string has all unique characters

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
