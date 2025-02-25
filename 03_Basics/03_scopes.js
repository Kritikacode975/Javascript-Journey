//***********************SCOPES IN JS****************************
// Define:(1)Global-Scope:Values which are written in global scope that are available for block scope
        //(2)Block-Scope: But Values which are written inside the block scope that are not available for global scope
// {} this is the scope in almost every programming language  when it comes with functions and conditions except python

// problem with var
// 1.var allows the same variable to be declared multiple times, which can lead to bugs if a variable is accidentally redeclared.

// var c = 300
let a = 300

if (true){
    let a = 10 // access inside the scope
    // console.log(a);
    
    const b = 20 // access inside the scope
    // console.log(b);
    
    // var c = 30 // There is an issue accessible outside the block, which is unexpected
    // c = 30
}
// console.log(a); ReferenceError: a is not defined
// console.log(b); ReferenceError: b is not defined
console.log(a); //30

// Note:While cheking global scope in windows it is different and in node it is different