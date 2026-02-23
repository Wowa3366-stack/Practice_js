
const guestName = "Mango";
const roomNumber = 207;

// const greeting = 'Welcome' + ' '  + guestName + ',' + 'your room number is' + ' ' + + roomNumber + '!';
const greeting2 = `Welcome ${guestName}, your room number is ${roomNumber}`;
// console.log(greeting2)



const productName = 'apple';
const productPrice = 2;
// const messageOne = 'You picked' + ' ' + productName + ',' + ' ' + 'price per item is' + ' ' + productPrice + ' ' + 'credits';
const messageTwo = `You picked ${productName}, price per item is ${productPrice} credits`;
// console.log(messageTwo.length)
const lastIndex = messageTwo.length - 1;
 const lastSymbol =  messageTwo[lastIndex]
// console.log(messageTwo[0])
// console.log(messageTwo[3])
//   const modMessage =  messageTwo.toUpperCase () 
//   console.log(modMessage)


// const modMessageTwo =  messageTwo.toLowerCase () 
// console.log(modMessageTwo)




// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase ()
// console.log(userInput === BRAND_NAME)


// console.log(messageTwo.indexOf('price'))

// console.log(messageTwo.indexOf('to'))
// console.log(messageTwo.includes('item'))


const fileName = 'styles.css';

console.log(fileName.endsWith('.js'));
console.log(fileName.endsWith('.css'));

const number = 80
const hours = Math.floor(number / 60);
const minutes = number % 60;
console.log(hours,minutes)


const modHours = String(hours).padStart(2,0);
const modMinutes = String(minutes).padStart(2,0);



 console.log(`${modHours}:${modMinutes}`);


