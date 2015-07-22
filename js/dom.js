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

// var allButtons = document.getElementsByTagName('button').addEventListener('click', function(){ console.log(this);});

var optionValues = [];
var options = document.getElementsByTagName('option');
for (var i = 0; i < options.length; i++) {
  optionValues.push(Number(options[i].value));
}

var sumAll = document.getElementById('sum-all');
if (sumAll) {
  sumAll.addEventListener("click",
  function(){
    var result = sum(optionValues);
    clearAnswerDiv();
    answerDiv.innerHTML = "$"+result+".00";
  });
}

var countSelectedBtn = document.getElementById('count-selected');
if (countSelectedBtn) {
  countSelectedBtn.addEventListener('click',
  function() {
    var selected = [];
    var temp = document.getElementsByTagName('select')[0].selectedOptions;
    for (var i = 0; i < temp.length; i++) {
      selected.push(temp[i]);
    }
    clearAnswerDiv();
    answerDiv.innerHTML = "You have selected " + countSelected(selected) + " items.";
  });
}

var sumSelectedBtn = document.getElementById('sum-selected');
if (sumSelectedBtn) {
  sumSelectedBtn.addEventListener('click',
  function() {
    var selected = [];
    var temp = document.getElementsByTagName('select')[0].selectedOptions;
    for (var i = 0; i < temp.length; i++) {
      selected.push(Number(temp[i].value));
    }
    clearAnswerDiv();
    answerDiv.innerHTML = "$"+sum(selected)+".00";
  });
}

var averageAll = document.getElementById('average-all');
if (averageAll) {
  averageAll.addEventListener("click",
  function(){
    var result = average(optionValues);
    clearAnswerDiv();
    answerDiv.innerHTML = "$"+result;
  });
}

var averageSelectedBtn = document.getElementById('average-selected');
if (averageSelectedBtn) {
  averageSelectedBtn.addEventListener('click',
  function() {
    var selected = [];
    var temp = document.getElementsByTagName('select')[0].selectedOptions;
    for (var i = 0; i < temp.length; i++) {
      selected.push(Number(temp[i].value));
    }
    clearAnswerDiv();
    answerDiv.innerHTML = "$"+average(selected);
  });
}

var allNamesBtn = document.getElementById("all-names");
if (allNamesBtn) {
  allNamesBtn.addEventListener('click',
  function() {
    var allNames = document.getElementsByTagName('textarea')[0].value.split('\n');
    clearAnswerDiv();
    for (i in allNames) {
      answerDiv.innerHTML += allNames[i] + "<br>";
    }
  });
}

var firstNamesBtn = document.getElementById('first-names');
if (firstNamesBtn) {
  firstNamesBtn.addEventListener('click',
  function() {
    var allNames = document.getElementsByTagName('textarea')[0].value.split('\n');
    clearAnswerDiv();
    for (i in allNames) {
      answerDiv.innerHTML += allNames[i].split(' ')[0] + "<br>";
    }
  });
}
