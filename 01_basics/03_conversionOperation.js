let score = "33abc"
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // number
console.log(valueInNumber); //NaN

let scoreNull = null
let valueInNumberWithNull = Number(scoreNull)
console.log(valueInNumberWithNull); // 0

let scoreboolean = true
let valueInNumberWithBoolean = Number(scoreboolean)
console.log(valueInNumberWithBoolean); // 0


let isLoggedIn = "ABC";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // for "ABC" ->true; for "" -> false; for 1 or 2 or any number  -> true; for 0 -> false


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber) //33
console.log(typeof stringNumber); // string


// "33" => 33
// "33abc" => NaN
// true => 1


