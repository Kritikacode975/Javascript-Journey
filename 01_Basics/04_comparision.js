// *********************************CAMPARISION OPERATORS********************************


// Common Camparision is given

// console.log(3 > 2);
// console.log(3 >= 2);
// console.log(3 < 2);
// console.log(3 <= 2);
// console.log(3 == 2);
// console.log(2 == 2);
// console.log(3 != 2);


// there is one problem in these types of comparision javaScript doen't gives predictable results. While comparision these types of operations make sure both the values have same datatype 
console.log("2" > 1); // true
console.log("02" > 1); // true



// These types of conversion are complex and make sure avoid these types of conversion this is only for practice to understand js in depth 
// Comparison with null
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true



// Comparison with undefined 
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
// **********************************************************************************


// === this is the strict operator is also compare datatype of the value
console.log("2" == 2); // true
console.log("2" === 2); // But if you use === operator it gives false because both the values have different data type





