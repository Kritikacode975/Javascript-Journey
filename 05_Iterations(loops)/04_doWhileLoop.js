//*************************DO WHILE LOOP IN JS**************************
// Define:A do-while loop runs the code at least once, then continues while the condition is true.

// Syntax of do while loop in js:
// do {
    
// } while (condition);
    //block scope
// Example:
let score = 11
// let score = 11 //Value is: 11 because in do while loop first we print and then check the condition that's why it prints 11
do {
    console.log(`Value is: ${score}`);
    // score = score + 1
    score++
} while (score <= 10);