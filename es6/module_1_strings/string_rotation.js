//In this problem we want to check to see if two strings are rotations of each other
//You may only use one call to the given method .substring()

//Example: stringRotation("thomas", "omasth"); -> true
//Example: stringRotation("thomas", "smotha");-> false

let stringRotation = (str1, str2) => {
  // Start with first letter of rotated string and iterate from there
  // find index of first rotated letter in string1 and set that as the start
  // iterate through string1 and string2 together checking if each letter is equal
  // if you get to the end of string1, reset index to 0 and continue
  let array1 = str1.split('');
  let array2 = str2.split('');
  let index1 = array1.indexOf(array2[0]);

  for(let item of array2){
    if (item !== array1[index1++]) {
      return false;
    }
    if(index1 === array1.length){
      index1 = 0;
    }
  }

  return true;
};

