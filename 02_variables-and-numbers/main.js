// Задание 1

let x1 = 2;
let y1 = 3;
let x2 = 10;
let y2 = 5;

let x = Math.abs(x2 - x1);
let y = Math.abs(y2 - y1);

console.log(x * y);


let x1 = 10;
let y1 = 5;
let x2 = 2;
let y2 = 3;

let x = Math.abs(x2 - x1);
let y = Math.abs(y2 - y1);

console.log(x * y);


let x1 = -5;
let y1 = 8;
let x2 = 10;
let y2 = 5;

let x = Math.abs(x2 - x1);
let y = Math.abs(y2 - y1);

console.log(x * y);


let x1 = 5;
let y1 = 8;
let x2 = 5;
let y2 = 5;

let x = Math.abs(x2 - x1);
let y = Math.abs(y2 - y1);

console.log(x * y);


let x1 = 8;
let y1 = 1;
let x2 = 5;
let y2 = 1;

let x = Math.abs(x2 - x1);
let y = Math.abs(y2 - y1);

console.log(x * y);


// Задание 2

// Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
// Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
// Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891.

let a = 13.1234567;
let b = 2.123;
let n = 5;

let num1 = Math.round(
  a % 1 * Math.pow(10, n)
);
let num2 = Math.round(
  b % 1 * Math.pow(10, n)
);

console.log('Исходные числа равны', a === b);
console.log('Числа равны', num1 === num2);
console.log('Первое число больше', num1 > num2);
console.log('Первое чило меньше', num1 < num2);
console.log('Первое число больше или равно', num1 >= num2);
console.log('Первое число меньше или равно', num1 <= num2);
console.log('Числа не равны', num1 != num2);


let a = 13.890123;
let b = 2.891564;
let n = 2;

let num1 = Math.round(
  a % 1 * Math.pow(10, n)
);
let num2 = Math.round(
  b % 1 * Math.pow(10, n)
);

console.log('Исходные числа равны', a === b);
console.log('Числа равны', num1 === num2);
console.log('Первое число больше', num1 > num2);
console.log('Первое чило меньше', num1 < num2);
console.log('Первое число больше или равно', num1 >= num2);
console.log('Первое число меньше или равно', num1 <= num2);
console.log('Числа не равны', num1 != num2);


let a = 13.890123;
let b = 2.891564;
let n = 3;

let num1 = Math.round(
  a % 1 * Math.pow(10, n)
);
let num2 = Math.round(
  b % 1 * Math.pow(10, n)
);

console.log('Исходные числа равны', a === b);
console.log('Числа равны', num1 === num2);
console.log('Первое число больше', num1 > num2);
console.log('Первое чило меньше', num1 < num2);
console.log('Первое число больше или равно', num1 >= num2);
console.log('Первое число меньше или равно', num1 <= num2);
console.log('Числа не равны', num1 != num2);


// Задание 3

// n = 0, m = 100;
// n = 2, m = 5;
// n = 100, m = −5;
// n = -3, m = −10.

let m = 0;
let n = 100;
let range = Math.abs(m - n);
let Min = Math.min(m, n);

let numberInRange = (Math.round(Math.random() * (range - 2))) + Min;
let randomOdd = numberInRange + (numberInRange % 2) + 1;

console.log(randomOdd);

let m = 2;
let n = 5;
let range = Math.abs(m - n);
let Min = Math.min(m, n);

let numberInRange = (Math.round(Math.random() * (range - 2))) + Min;
let randomOdd = numberInRange + (numberInRange % 2) + 1;

console.log(randomOdd);

let m = 100;
let n = -5;
let range = Math.abs(m - n);
let Min = Math.min(m, n);

let numberInRange = (Math.round(Math.random() * (range - 2))) + Min;
let randomOdd = numberInRange + (numberInRange % 2) + 1;

console.log(randomOdd);


let m = -3;
let n = -10;
let range = Math.abs(m - n);
let Min = Math.min(m, n);

let numberInRange = (Math.round(Math.random() * (range - 2))) + Min;
let randomOdd = numberInRange + (numberInRange % 2) + 1;

console.log(randomOdd);
