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

// let n = 0;
// console.log(n);

// while (n <= 9) {
//   n++;
//   if (n === 3 || n === 8) {
//     continue;
//   }
//   console.log(n);
// }

for (let n = 0; n <= 10; n++) {
  if (n === 3 || n === 8) {
    continue;
  }
  console.log("Iterazione numero: " + n);
}

//Esercizio 4

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (n in numbers) {
//   if (n % 2 == 0) {
//     console.log(n + " is even");
//   } else {
//     console.log(n + " is odd");
//   }
// }

for (let a = 0; a <= 15; a++) {
  if (a % 2 == 0) {
    console.log(a + " is even");
  } else {
    console.log(a + " is odd");
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
if (firstNum + secondNum === 8) {
  console.log("Their addiction is equal to 8");
} else if (firstNum - secondNum === 8 || secondNum - firstNum === 8) {
  console.log("Their subtraction is equal to 8");
}

// Esercizio 2

let totalShoppingCart = 20;

if (totalShoppingCart > 50) {
  console.log(
    "Your cart is $" + totalShoppingCart + "! Your shipping is FREE!"
  );
} else {
  console.log("The shipping is $10, the total is $" + (totalShoppingCart + 10));
}

// Esercizio 3

let totalShoppingCart2 = 80;
let totalShoppingCartBlack =
  totalShoppingCart2 - (totalShoppingCart2 * 20) / 100;

console.log(totalShoppingCartBlack);

if (totalShoppingCartBlack > 50) {
  console.log(
    "Your cart is $" + totalShoppingCartBlack + "! Your shipping is FREE!"
  );
} else {
  console.log(
    "The shipping is $10, the total is $" + (totalShoppingCartBlack + 10)
  );
}

// Esercizio 4

let isMale = true;
let gender = isMale ? "Male" : "Female";
console.log(gender);

// Esercizio 5

for (buzzy = 1; buzzy <= 100; buzzy++) {
  if (buzzy % 3 === 0 && buzzy % 5 === 0) {
    console.log("FizzBuzz");
  } else if (buzzy % 3 === 0) {
    console.log("Fizz");
  } else if (buzzy % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(buzzy);
  }
}
