/**
Write a function that will find the position of a given string in an array

params:
- an array of string
- a string to find the position in.

ex:
var elements = ['a', 'b', 'c'];
var searchString = 'b';

getPositionIn1(elements, searchString) // will return 1
*/
const getPositionIn1 = function (elements, searchString) {
    // todo
}

/**
Write a function that will find the position of a given string in an array
But this time, the function should not perform the seach in a case sensitive way

hint: array.findIndex could be one of many ways to acheive it

params:
- an array of string
- a string to find the position in.

ex:
var elements = ['Animal', 'fruits', 'foobaR'];
var searchString = 'FrUiTs';

getPositionIn2(elements, searchString) // will return 1
*/
const getPositionIn2 = function (elements, searchString) {
    // todo
}

/**
Write a function that will find all positions of a given string in an array
But this time, the function should not perform the seach in a case sensitive way

hint: array.findIndex could be one of many ways to acheive it

params:
- an array of string
- a string to find the position in.

ex:
var elements = ['Animal', 'fruits', 'foobaR', 'seRpent', 'Fruits'];
var searchString = 'FrUiTs';

getPositionIn3(elements, searchString) // will return [1,4]
*/
const getPositionIn3 = function (elements, searchString) {
    // todo
}

export { getPositionIn1, getPositionIn2, getPositionIn3 };