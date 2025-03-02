//*************************TRUTHY AND FALSY VALUES IN JS*************************
// Define:A truthy value is any value that is considered "true" when evaluated in a boolean context.
//        A falsy value is a value that evaluates to "false" when used in a boolean context.



// Example:
// const userEmail = "kitkat.com" //Got the user email address
// const userEmail = "" // Don't have user email
const userEmail = [] //Got the user email address

if(userEmail){
    console.log("Got the user email address");
} else{
    console.log("Don't have user email");
}

console.log("-------------------------------------------");



// Truthy values:
        // "0", 'false', " ", [], {}, function(){}

// Falsy values:
        // false, 0, -0, BigInt 0n, "", null, undefined, NaN



// Is array truthy value check with the length
const arr1 = []

if(arr1.length === 0){
    console.log("Yes, Array is empty");
    
}

console.log("-------------------------------------------");


//  Is objects are truthy value check with the length
const emptyObj = {}

if(Object.keys(emptyObj.length === 0)){
    console.log("Yes, Object is empty");
    
}

console.log("-------------------------------------------");

// Note: basic of js for interview
console.log(false == 0);
console.log(false == '');
console.log(0 == '');
