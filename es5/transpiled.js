//Compress a string by creating a method that returns a compressed form the of the given string.
//If the given string is longer after the compression is attempted, return the original string instead.
//Example: "aaabbcccc".stringCompression(); -> "a3b2c4"
//Example: "a".stringCompression(); -> "a" would be returned, not "a1"

//Writing a traditional function declaration here is necessary
//In Babel 'this' is not attached to window and will transpile into undefined!
'use strict';

String.prototype.stringCompression = function () {}; //Given two strings, implement a method that determines if the input string is a permutation of the other

//Writing a traditional function declaration here is necessary
//In Babel this is not attached to window and will transpile into undefined!
String.prototype.permutationCheck = function (str) {}; //In this problem we want to check to see if two strings are rotations of each other
//You may only use one call to the given method .substring()

//Example: stringRotation("thomas", "omasth"); -> true
//Example: stringRotation("thomas", "smotha");-> false

var stringRotation = function stringRotation(str1, str2) {}; //Create a function to determine if a string has all unique characters

var unique = function unique(str) {
  var strArray = str.split('');
  var obj = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = strArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (obj[item]) {
        return false;
      }
      obj[item] = true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
};

//EXTRA CREDIT: Implement the unique problem without creating additioanl data structures

var unique_extra = function unique_extra(str) {
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};
