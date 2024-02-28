//Primitives

// 7 categories String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 103.23
const isLoggedIn = false
const outsideTemp = null
let userEmail;  // or let userEmail = undefined // both are same

const id = Symbol('123')
const anotherId = Symbol('123')

//const bigNumber = 2343243423432432424; //Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.ts(80008)
const bigNumber = 2343243423432432424n; // So here use 'n' in the end

console.log(id === anotherId) //false Symbol use for uniqueness


// Reference Type (Nonprimitive)
//Array, Objects, Functions

const heros= ["saktiman", "naagraj", "doga"]
let myObj = {
    name: "abc",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
}

//How to know datatypes
console.log(typeof bigNumber) //bigint
console.log(typeof null) //object
console.log(typeof myFunction)// function // It return 'function' but it is called 'function object' also
console.log(typeof id) // symbol


// https://262.ecma-international.org/5.1/#sec-11.4.3