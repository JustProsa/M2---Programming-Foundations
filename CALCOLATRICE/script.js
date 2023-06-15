let currentResult = "";

function appendNumber(number) {
  currentResult += number;
  updateResult();
}

function appendOperator(operator) {
  currentResult += operator;
  updateResult();
}

function clearResult() {
  currentResult = "";
  updateResult();
}

function calculateResult() {
  try {
    const result = eval(currentResult);
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
