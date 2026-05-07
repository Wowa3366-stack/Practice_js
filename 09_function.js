// const hiFn = function () {
//     return 'hello'
// }
// const result = hiFn()
// console.log(result);

// const showName = function (name) {
//     console.log(`Hello, ${name}`);

// }
// showName('Max')

// const mul = function (n, m) {
// const sum = n + m;
// const multiply = n * m;
// const diff = n - m;
// return [sum, multiply, diff]
// }

// const result = mul(2, 4);
// console.log(result);

/* 3
Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. 
Вона приймає два параметри, 

orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
pricePerItem - другий параметр, ціна одиниці товару.
Функція повинна повертати загальну суму покупки - 
результат множення кількості товарів на ціну одного.

Виклик calculateTotalPrice(5, 100) повертає 500 */

// const calculateTotalPrice = function(orderedQuantity,pricePerItem) {
//     const sum = orderedQuantity * pricePerItem
//     return sum
// }
// const result1 = calculateTotalPrice(5,100)
// console.log(calculateTotalPrice(5,100));

/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/

// Виклик функції calculateTax(100, 0.1) повертає 10
// Виклик функції calculateTax(200, 0.1) повертає 20
// Виклик функції calculateTax(100, 0.2) повертає 20

// const calculateTax = function (amount, taxRate = 0.2){
// const sum = amount * taxRate;
// return sum;
// }
// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));
// console.log(calculateTax(100, 0.2));

// 2. напиши функцію, яка буде перевіряти чи є продукт на складі
// приймає storage масив з продуктами та
// item продукт, який потрібно знайти.
// Використовуй пошук в масиві за доп методу includes
// якщо є товар повертати повідомлення
// ${item} is available to order!
// якщо немає  "Sorry! We are out of stock!";

// const checkStorage = function (array, item) {
//     if (array.includes(item.toLowerCase())) {
//         return `${item} is available to order!`
//     }
//     return "Sorry! We are out of stock!"
// }
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

//  checkStorage(["apple", "plum", "pear"], "pLuM")

// створити функцію для створення настроюваного цикла
// з параметрами від до та кроком
// count(1, 5); // From = 1, To = 5, step = 1
// count(2); // From = 2, To = 10, step = 1
// count(undefined, 5, 2); // From = 0, To = 5, step = 2
// count(); // From = 0, To = 10, step = 1

function count(from, to, step) {
  for (let i = from; i <= to; i += step) {
    // console.log(i);
  }
}
count();
count(5, 10, 2.5);
//  count(1, 5, 1)
//  count(2, 10, 1)
//  count(0, 5, 2)
//  count(0, 10, 1)

// Average score: A (якщо середня оцінка від 91 до 100)
// Average score: B (якщо середня оцінка від 81 до 90)
// Average score: C (якщо середня оцінка від 71 до 80)
// Average score: D (якщо середня оцінка від 70 і менше)

const myScore = function (score) {
  if (score < 100 && score > 91) {
    return "A";
  }
  if (score < 90 && score > 81) {
    return "B";
  }
  if (score < 80 && score > 71) {
    return "C";
  }
  if (score < 70 && score > 0) {
    return "D";
  }
  return "Введіть коректне значення.";
};

myScore(93);
console.log(myScore(93));

/*
 * Напиши функцію calculateTotalPrice(items)
 * яка приймає масив цін (чисел) та повертає їх суму
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
  let total = 0;
const calculateTotalPrice = function (items) {
  for (const item of items) {
    total += item;
  }
  return total;
};


console.log(calculateTotalPrice(cart));
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600