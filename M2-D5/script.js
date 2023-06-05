// M2-D5
// Esercizio 1

function crazySum(num1, num2) {
  if (num1 !== num2) {
    return num1 + num2;
  } else {
    return num1 * num2;
  }
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

console.log(boundary(133));
console.log(boundary(348));
console.log(boundary(400));

//Esercizio 3

function reverseString(str) {
  let stringArray = str.split("");
  let reverseArray = stringArray.reverse();
  let reverseStr = reverseArray.join("");
  return reverseStr;
}

let epicode = "EPICODE!";
let reverseEpicode = reverseString(epicode);
console.log(reverseEpicode);

//Esercizio 4

function upperFirst(frase) {
  let fraseArray = frase.split(" ");
  for (let i = 0; i < fraseArray.length; i++) {
    fraseArray[i] = fraseArray[i].split("");
    fraseArray[i][0] = fraseArray[i][0].toUpperCase();
    fraseArray[i] = fraseArray[i].join("");
  }

  let upperCaseArray = fraseArray.join(" ");

  return upperCaseArray;
}

let stringa = "che ne pensi dei bububu?";
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

function crazySum2(num1, num2) {
  return num1 !== num2 ? num1 + num2 : (num1 + num2) * 3;
}
console.log(crazySum2(2, 4));
console.log(crazySum2(5, 5));

//Esercizio 2

function boundary2(x) {
  if ((20 <= x && x <= 100) || x === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary2(60));
console.log(boundary2(14));
console.log(boundary2(400));

//Esercizio 3

//Esercizio 4

//Esercizio 5
