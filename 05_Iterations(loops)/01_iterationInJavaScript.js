//**************************ITERATIONS(LOOPS) IN JS********************************
// Define:Loops (Iterations) in JavaScript are used to repeat a block of code multiple times until a specific condition is met.


//(1) for loop:A for loop runs a block of code a fixed number of times.


// Syntax of for loop in js:
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];}
    


// Steps to execute for loop in js
// 1)Initializing index
// 2)Check the condition if it is true goes for execution
// 3)before ending block scope it increase the value of index
// 4)It repeats and check if the checking fail it will print the answer


// Example:
// for (let index = 0; index < 10; index++) {
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);    
}

console.log("------------------------------------");


for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);    
}

console.log("------------------------------------");

for (let i = 0; i <= 10; i++) {
    const element = i;
    
    if(element == 3){
        console.log("3 is the best number for me ");
        
    }
    console.log(element);    
}

console.log("------------------------------------");

// loop inside the for loop
for (let i = 0; i <=10; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`Inner Loop: ${j} and Inner Loop: ${i}`);
    }
}

console.log("------------------------------------");

// Multiplication table 1 to 10 with for loop
for (let i = 1; i <=10; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j =1; j < 10; j++) {
        console.log(i + "*" + j + " = " + i*j);
    }
}

console.log("------------------------------------");

// for loop with array
let myArray = ["Osworld", "Noddy","Thomas and his friends"]
console.log("Length of array is:",myArray.length);


for (let i = 0;  i<myArray.length; i++) { 
    // for (let i = 0;  i<=myArray.length; i++) { //undefined
    // for (let i = 0;  i<myArray.length; i) { //// repeats the loop infinity 
    const element = myArray[i]
    console.log(element);
}
