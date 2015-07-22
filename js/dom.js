/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

var answerDiv = document.getElementById('answer');

function clearAnswerDiv() {
  answerDiv.innerHTML = "";
}


var optionValues = [];
var options = document.getElementsByTagName('option');
for (var i = 0; i < options.length; i++) {
  optionValues.push(Number(options[i].value));
}

var sumAll = document.getElementById('sum-all');
sumAll.addEventListener("click",
  function(){
  var result = sum(optionValues);
  clearAnswerDiv();
  answerDiv.innerHTML = "$"+result+".00";
});

