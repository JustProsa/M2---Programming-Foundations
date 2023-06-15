let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let clear = document.getElementById("clear");
let calculate = document.getElementById("calculate");

let currentResult = "";

for (let number of numbers) {
  number.addEventListener("click", function () {
    appendNumber(number.textContent);
  });
}

for (let operator of operators) {
  operator.addEventListener("click", function () {
    appendOperator(operator.textContent);
  });
}

clear.addEventListener("click", function () {
  clearResult();
});

calculate.addEventListener("click", function () {
  calculateResult();
});

function appendNumber(num) {
  currentResult += num;
  updateResult();
}

function appendOperator(op) {
  currentResult += op;
  updateResult();
}

function clearResult() {
  currentResult = "";
}

function calculateResult() {
  try {
    const calculation = new Function("return " + currentResult);
    const result = calculation();
    currentResult = result;
    updateResult();
  } catch (error) {
    currentResult = "Errore";
    updateResult();
  }
}

function updateResult() {
  document.getElementById("result").value = currentResult;
}
