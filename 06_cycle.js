let number = 10;

do {
  // console.log(number);
  number = number - 1;
} while (number >= 1);

let count = 0;

while (count < 10) {
  //    console.log(`Count: ${count}`);
  count += 1;
}

for (let i = 0; i <= 10; i += 1) {
  // console.log(i);
}

//  Знайти суму всіх цілих чисел від одиниці до цього числа

const num = 10;

let result = 0;

for (let i = 0; i <= num; i = i + 1) {
  result = result + i;
//   console.log(i);
}

// console.log(result);

// 2
// Переписати на while


// for (let number = 0; number < 5; number += 1) {
//     console.log(`Число ${number}`);
// }

let num1 = 0;

while (num1 < 5){
    //  console.log(`Число ${num1}`);

     num1 += 1
}
for (let number = 0; number <= 10; number += 1) {
    if (number % 2 === 0) {
        // console.log(number);
    }
}
// Не парні
for(let i = 0; i < 10; i += 1){
    
    if(i % 2 === 0){
        continue;
    }
    // console.log(i);
}

const value = 10;
for (let i = 0; i < value; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
//   console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
}



//   Доповни код таким чином, щоб у змінну w записувалося
//  перше число у проміжку від start до end, 
// яке ділиться на 5 без остачі

const start = 6;
const end = 17;

for (let w = start; w < end; w += 1) {
  if (w % 5 === 0) {
    // console.log("Знайшли число", w);
    break;
  }
}







// Префіксний інкремент (++value)
// спочатку збільшує значення змінної,
// а потім використовує нове значення у виразі.

let x = 5;
const y = ++x;
// console.log(x); // 6
// console.log(y); // 6

// Постфіксний інкремент (value++)
// спочатку використовує поточне значення змінної у виразі,
// а потім виконує збільшення значення.

let f = 5;
const g = f++;
// console.log(f); // 6
// console.log(g); // 5
