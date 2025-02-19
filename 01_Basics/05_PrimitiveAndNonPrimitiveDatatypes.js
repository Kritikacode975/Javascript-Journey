// **************************************PRIMITIVE DATATYPES********************************
// define:These are basic, immutable (cannot be changed) data types. They store only a single value.
// Basically 7 types of primitive datatype I mentioned with example

// 1.String:
const score = 100
console.log(score);
console.log(typeof(score)); // number

//  2.Number:
const scoreValue = 100.3
console.log(scoreValue);
console.log(typeof(scoreValue)); //number

//  3.Boolean:
const isLoggedIn = true
console.log(isLoggedIn);
console.log(typeof(isLoggedIn)); // boolean

//  4.null:
const outsideTemp = null // empty value even not a 0 initialised
console.log(outsideTemp);
console.log(typeof(outsideTemp)); // object

// 5.undefined:
let userEmail
console.log(userEmail);
console.log(typeof(userEmail)); //undefined

// 6.Symbol:
const id  = Symbol("123")
const anotherId  = Symbol("123")
console.log(id === anotherId);
console.log(typeof(anotherId)); //symbol

// 7.Bigint
const bigNumber = 74395739432974n
console.log(bigNumber);
console.log(typeof(bigNumber)); //bigint



//**************************************NON-PRIMITIVE DATATYPES(Reference)*************************************
// Basically 3 types of Non-primitive datatype I mentioned with example
// define:These store collections of data and can be modified. They are stored as references in memory.

// 1.Array:
const carToons = ["Osworld","ThomasAndHisFrends","Noddy","GaliGali-SimSim"]
console.log(carToons);
console.log(typeof(carToons)); //object


// 2.Objects:
const myObject = {
    name:"Kritika Lohani",
    age: 21,
}
console.log(myObject);
console.log(typeof(myObject)); //object function


// 3.Functions:
const myFunc = function(){
    console.log("Hello India");
}
myFunc() // calling function
console.log(typeof(myFunc));







