// M2-D5
// Esercizio 1

function crazySum(num1, num2) {
  return num1 !== num2 ? num1 + num2 : (num1 + num2) * 3;
}
console.log(crazySum(2, 4));
console.log(crazySum(5, 5));

//Esercizio 2

function boundary(x) {
  if ((100 <= x && x <= 200) || x === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(133), 133);
console.log(boundary(348), 348);
console.log(boundary(400), 400);

//Esercizio 3

function reverseString(str) {
  // let stringArray = str.split("");
  // let reverseArray = stringArray.reverse();
  // let reverseStr = reverseArray.join("");
  // return reverseStr;

  return str.split("").reverse().join("");
}

let epicode = "EPICODE!";
let reverseEpicode = reverseString(epicode);
console.log(reverseEpicode);

//Esercizio 4

function upperFirst(frase) {
  let fraseArray = frase.split(" ");
  for (let i = 0; i < fraseArray.length; i++) {
    // fraseArray[i] = fraseArray[i].split("");
    // fraseArray[i][0] = fraseArray[i][0].toUpperCase();
    // fraseArray[i] = fraseArray[i].join("");
    fraseArray[i] = fraseArray[i][0].toUpperCase() + fraseArray[i].slice(1);
  }

  let upperCaseArray = fraseArray.join(" ");

  return upperCaseArray;
}

let stringa =
  "forse però pietro potrà proteggerci detto anche tigre intriga tigre";
console.log(upperFirst(stringa));

//Esercizio 5

function giveMeRandom(n) {
  let randomNumbers = [];

  for (let i = 0; i < n; i++) {
    let numbers = Math.floor(Math.random() * 10);
    randomNumbers.push(numbers);
  }

  return randomNumbers;
}

console.log(giveMeRandom(15));

//Esercizi facoltativi

//Esercizio 1

function area(base, altezza) {
  return `Il reattangolo di base ${base} e altezza ${altezza}, ha un' area di ${
    base * altezza
  }`;
}
console.log(area(2, 4));
console.log(area(5, 5));

//Esercizio 2

function crazyDiff(numero) {
  return Math.abs(numero - 19) > 19
    ? Math.abs(numero - 19) * 3
    : Math.abs(numero - 19);
}

console.log(crazyDiff(60));
console.log(crazyDiff(21));
console.log(crazyDiff(8));

//Esercizio 3

function codify(stringa) {
  return stringa.startsWith("code") ? stringa : `code ${stringa}`;
}
let codefrase = "ciao come stai?";
console.log(codify(codefrase));

//Esercizio 4

function check3and7(int) {
  return int % 3 === 0 || int % 7 === 0 ? true : false;
}

console.log(check3and7(10));
console.log(check3and7(14));
console.log(check3and7(3));

//Esercizio 5

function cutString(string) {
  return string.slice(1, -1);
  // return string.slice(1, string.length - 1)
}

console.log(cutString("EPICODE"));
