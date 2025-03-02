//*************************WHILE LOOP IN JS**************************
// Define:A while loop runs a block of code as long as a condition is true.

// Syntax of while loop in js:
// initialization
// while (condition) {
    
// }

// Eaxmple1:
let index = 0 // print even numbers because increase by 2
// let index = 1 // print odd numbers because increase by 2
while (index <= 10) {
    console.log(`Value of index is: ${index}`);
    index = index + 2  
}

console.log("----------------------------------------------------");


// Example2 with array:
let myArray = ["Osworld", "Noddy","Thomas and his friends"]
let i = 0
while (i< myArray.length) {
    console.log(`Value is: ${myArray[i]}`);
    i = i+1 
}
