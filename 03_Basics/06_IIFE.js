//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// Define: If we don't want any pollution from global scope we create our different scope and call it immediately called IIFE.BAsically IIFE is used for remove the global scope pollution

//How it works?
// Understand its syntax: first parenthesis()-> Used to write function defination and second parenthesis()-> used for execution. Here we wrap function inside the parenthesis

(function kitkat(){
    console.log(`DB CONNECTED`);
})();


// While run the program problem of error is occour ypeError: (intermediate value)(...) is not a function what the exact problem is and how to solve lets see

// explaining problem
// 1)After the first IIFE execution })(), JavaScript expects a semicolon (;) to separate it from the next function.
// 2)JavaScript doesn’t automatically insert a semicolon (;) before the second IIFE.
// 3)Since the second IIFE starts immediately after the first one, JavaScript thinks it's trying to call the result of the first IIFE (which is undefined).This causes a SyntaxError.

// solution use semicolon after declaring function so the next function will eecute(;)
// This is named IIFE
(function kitkat1(){
    console.log(`DB CONNECTED TWO`);
})();

(function pleseHaveBreak(){
    console.log(`DB CONNECTED THREE`);
})();




//Arrow function with IIFE
//This is unnamed IIFE
(() => {
    console.log(`DB CONNECTED FOUR`);
})();


// How to expect variable
((name) => {
    console.log(`YOUR DB IS CONNECTED, ${name} `);
})("Mis Kritika") // Here we pass the argument

