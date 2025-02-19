// ***********************************TYPECONVERSION IN JAVASCRIPT***********************************************

// let score = 33 //-> number
// let score = "33" //-> string
// let score = "33abc" //-> NaN(not a number)
// let score = null //-> 0
// let score = undefined //-> NaN(not a number)
// let score = true //-> 1
// let score = false //-> 0
let score = "Kritika" //-> NaN(not a number)

//two ways to check the type of value
console.log(typeof score)
console.log(typeof(score))



// we do type conversion here to convert the string into number
//Every datatypes first letter is capital to convert the datatype

// CONVERT TO NUMBER
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// CONVERT TO BOOLEAN
// let isLoggedIn = 1 //        gives true
// let isLoggedIn = 0 //        gives false
// let isLoggedIn = "" //       gives false
let isLoggedIn = "Kritika" //   gives true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


// CONVERT TO STRING
let number = 12
let toTheString = String(number)
console.log(typeof toTheString);
console.log(toTheString);


// ***********************************OPERATIONS IN JAVASCRIPT***********************************************
let value = 3
let negValue = -value
console.log(negValue);

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3**3);
// console.log(3/3);
// console.log(3%3);

let str1 = "Hello"
let str2 = " Kritika"
let ans = str1 + str2

console.log(ans);

// complex operations
console.log("1" + 2); // concate
console.log(1 + "2"); // cocate
console.log("1" + 2 + 2); // concate
console.log(1 + 2 + "2"); // first two num add then concate with third num

// Do not write this type of operation to confuse itself use parenthesis to give priority
console.log(3 + 4 * 5 % 3); // wrong way
console.log((3 + 4) * 5 % 3); // right way


console.log(true);
console.log(+true); //gives ans 1
// console.log(true+); //SyntaxError: Unexpected token 
console.log(+"");

// Not a proper way just for practice to know js more how the things work
let num1, num2, num3 = 3+4
console.log(num3);

// topic of prefix and postfix whole topic is gives in next file
let gameCounter = 100
// gameCounter++ // postfix
++gameCounter // prefix
console.log(gameCounter);









