/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in

NOTE: use a `for` loop to make this happen.

*/


function sum(options) {
  var total = 0;
  for (var i in options) {
    total += options[i];
  }
  // console.log(total);
  return total;
}

function countSelected(selected) {
  return selected.length;
}

function average(array){
  var result = 0;
  for (var i in array) {
    result += array[i];
  }
  result = result/array.length;
  return result;
}
