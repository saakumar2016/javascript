let score = "33abc"
//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber) // number
//console.log(valueInNumber); //NaN

let scoreNull = null
let valueInNumberWithNull = Number(scoreNull)
//console.log(valueInNumberWithNull); // 0

let scoreboolean = true
let valueInNumberWithBoolean = Number(scoreboolean)
//console.log(valueInNumberWithBoolean); // 0


let isLoggedIn = "ABC";
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); // for "ABC" ->true; for "" -> false; for 1 or 2 or any number  -> true; for 0 -> false


let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber) //33
//console.log(typeof stringNumber); // string


// "33" => 33
// "33abc" => NaN
// true => 1


// ******************Operations**********************

let value = 3
let negativeValue = -value
// console.log(negativeValue);
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") //32

let gameCounter = 100
gameCounter++ //101
++gameCounter //101
// console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

