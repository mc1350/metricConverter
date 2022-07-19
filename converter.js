let valueInput = document.getElementById("value");
let answerOne = document.getElementById("answerone");
let answerTwo = document.getElementById("answertwo");
let answerThree = document.getElementById("answerthree");

function calculateValue() {
  let input = valueInput.value;
  answerOne.innerText = input + " meters = " + (input / 3.281).toFixed(3) +
   " feet | " + input + " feet = " + (input*3.281).toFixed(3) + " meters";

  answerTwo.innerText = input + " liters = " + (input / 3.785).toFixed(3) +
  " gallons | " + input + " gallons = " + (input*4.546).toFixed(3) + " liters";

  answerThree.innerText = input + " kilos = " + (input * 2.205).toFixed(3) +
  " pounds | " + input + " pounds = " + (input/2.205).toFixed(3) + " kilos";
}