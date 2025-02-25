//*********************FUNCTION IN JS**********************
// Define:A function in JavaScript is a block of reusable code that performs a specific task when called.

// function keyword is used to define function in js
function sayMyName(){
    console.log("K");
    console.log("r");
    console.log("i");
    console.log("t");
    console.log("i");
    console.log("k");
    console.log("a");
    // console.log("K"); 
}

// sayMyname is a reference of function , () is the execute of function
sayMyName()

// Create function to add two numbers
function addtwoNumbers(num1,num2){ // (Parameters)
    console.log(num1+num2);
}

addtwoNumbers(23,45) //68 (Arguments)
addtwoNumbers(23,"3") // 233
addtwoNumbers(23,"a") // 23a
addtwoNumbers(23,null) // 23

// Note: when we define the function we take input as an parameter, And when we call function we take input as an argument


//How to  Return value from the function 
function addtwoNumbers(num1,num2){
    // let result = num1 + num2 // type1 to return function
    // return result

    // console.log("Kritika"); //This will execute becacuse it is written before the returning

    // return keyword is used to return the function
    return num1+num2 // typ2 to return function
    console.log("Kritika"); // In js there is a rule bydefault after returning the function rest anything will never execute
    
}

const result = addtwoNumbers(10,20)
console.log("Result is:",result);

// Note: The variable inside the function is different from the variable which we declare outside the function both are not same will further discuse about this

// create a function for user login the system
// function loginUserMsg(username){
function loginUserMsg(username= "Krishna"){ // this is the default value when value is not given this value is execute
    // if(username === undefined){
    if(!username){ // used as a professional code
        console.log("Please enter the username ");
        return // rest will not execute
    }
    return `${username} just logged in` // Here we return the function
}

// console.log(loginUserMsg("Kritika")) //Kritika just logged in
// console.log(loginUserMsg("")) // just logged in
console.log(loginUserMsg()) // undefined just logged in

// Note: when the value is not given js automatically takes the default value if it is define and when we give the value it will override the default value