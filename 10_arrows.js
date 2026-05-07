// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// }

// const hello = () =>{
//     return "Hello!"
// }

// const message = (name = "user") =>{

//     return "Hello!" + name;
// }

// console.log(message("Vova"));

/*   Задача разом
Напиши стрілкову функцію myNewArrowFunction(), 
яка приймає всі аргументи за допомогою ...rest і
 в результаті виводить масив цих аргументів у консоль.
Для перевірки: */

// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// const myNewArrowFunction = (...args) =>{

// console.log(args);
// }

// console.log(myNewArrowFunction);

//  myNewArrowFunction(1, 2, 3);
//  myNewArrowFunction(100, 200, 300, 400, 500);
//  myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

/*   3.
Напишіть стрілкову функцію mul(n, m), 
яка приймає два аргументи і 
повертає добуток  цих аргументів.
 Перевірте її роботу. */

//  const mul = (n, m) =>{
// const result = n * m
// return result

//  }
//  console.log( mul(13, 5));

//  mul(13, 5)

// const mul = (n, m) => n * m;
// console.log(mul(13, 5));

// mul(13, 5);


//  const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

const deliveryPizza = (pizzaName) => {
    return `Delivering ${pizzaName} pizza.`;
}


const makePizza = (pizzaName) => {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
}


/* задачка

Доповни функцію makeMessage таким чином,щоб вона очікувала
 другим параметром (параметр callback) колбек-функцію і 
 повертала результат її виклику. 
 Функції deliverPizza або makePizza будуть передаватися 
 як колбек для makeMessage і очікувати аргументом 
 ім'я готової піци, що доставляється.*/
  
const makeMessage = function (pizzaName, callback) {
    
    const result = callback(pizzaName)
    return result
    console.log(callback);
}




console.log(makeMessage("Royal Grand", makePizza));
"Pizza Royal Grand is being prepared, please wait..."

console.log(makeMessage("Ultracheese", deliveryPizza));
"Delivering Ultracheese pizza."



console.log(makeMessage("Paperoni", (pizzaName) => {
return 'Ваше замовлення номер 25 виконується'
}));