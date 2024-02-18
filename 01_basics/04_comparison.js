// console.log("2" > 1); 
// console.log("02" > 1);
// console.log("1" > 1); 
// do not compare different datatypes


console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
/* 
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisions convert null to a number, treating it as 0.
That's why (3rd)null >= 0 is true and (1st)null > 0 is false.
*/
  
console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined >= 0);//false

// ===
// check value and datatype
console.log("2" === 1)