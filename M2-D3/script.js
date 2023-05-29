//Esercizio 1

let num1 = 5;
let num2 = 8;

console.log(num1 + " and " + num2);

if (num1 > num2) {
  console.log("The first number is bigger");
} else if (num2 > num1) {
  console.log("The second number is bigger");
} else {
  console.log("The numbers are equal");
}

//Esercizio 2

let number = 20;
console.log(number);

if (number < 5) {
  console.log("Tiny");
} else if (number < 10) {
  console.log("Small");
} else if (number < 15) {
  console.log("Medium");
} else if (number < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}

//Esercizo 3

let n = 0;
console.log(n);

while (n <= 9) {
  n++;
  if (n === 3 || n === 8) {
    continue;
  }
  console.log(n);
}

//Esercizio 4

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (n in numbers) {
  if (n % 2 == 0) {
    console.log(n + " is even");
  } else {
    console.log(n + " is odd");
  }
}

//Esercizi facoltativi
//Esercizio 1

let firstNum = 3;
let secondNum = 5;

console.log(firstNum + " and " + secondNum);
if (firstNum === 8 || secondNum === 8) {
  console.log("One of them is 8");
}
if (firstNum + secondNum == 8) {
  console.log("Their addiction is equal to 8");
} else if (firstNum - secondNum == 8 || secondNum - firstNum == 8) {
  console.log("Their subtraction is equal to 8");
}
