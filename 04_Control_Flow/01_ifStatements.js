//*************************************CONTROL FLOW STRUCTURE**********************************
// Define:Control flow structure in programming refers to the way a program's instructions are executed based on conditions and logic. It controls the order in which code runs.


//(1) if statement:The if statement checks a condition. If it's true, the code inside runs.

// Syntax in js of if:
// if(condition){
//     scope
// }
// Note: if condition is true if statement is execute and if condition is false it is not executed.


// If statemente work with comparison operators:
// (<)  : less than
// (>)  : greater than
// (<=) : less than equals to
// (>=) : greater than equals to
// (==) : comparison check both the values are equal
// (===): comparison check both the values as well datatype are equal
// (!=) : check the values are not equals with the another value
// (!==): it checks the negative sign


// Example1:
const isUserloggedIn = true

if(isUserloggedIn){ //Executed
// if(3 != 2){ //Executed
// if(2 == "2"){
// if(2 === "2"){ // Nothing will execute because === also check datatype
// if(3 !== 2){ //Executed
    console.log("Executed"); 
}

console.log("--------------------------------------------------------------");

// Example2:
const temperature = 50

if (temperature < 75){
// if (temperature === 75){ // If we want to check strictly use ===
    console.log("Yes temperature is less than 75"); // if true: print Yes temperature is less than 75
}
console.log("Temperature is greater than 75"); // This statement executecompulsory because it is not inside the boundary of if statement

console.log("--------------------------------------------------------------");


//(2) if else statement:If the condition is true, one block runs; otherwise, the else block runs.

// Syntax in js of if:
// if(condition){
//     scope
// } else{
//     scope 
// }

// Example1:
const temperature1 = 50

if (temperature1 < 75){
// if (temperature1 > 75){
// if (temperature === 75){ // If we want to check strictly use ===
    console.log("Yes temperature is less than 75"); // if true: print Yes temperature is less than 75
} else {
    console.log("Temperature is greater than 75");
}

console.log("--------------------------------------------------------------");

// Example2:
const score = 200

if(score > 100){
    console.log("Yes, Score is greater than 200");

    //problem of var
    // var power = "Code" // There is an problem while declaring var because it can work within the block scope also outside the block scope instead of using var use let and const
    let power = "Code" // power is not defined
    console.log(`User Power: ${power}`);
    const power1 = "Design"
    console.log(`User Power: ${power1}`);
}
//Note: console.log(`User Power: ${power}`); // because of scope: power is not defined beacuse the scope of variable is only valid inside that perticular block (let,const)

console.log("--------------------------------------------------------------");

// Implicit scope means maan liya scope hai
// Note:this is only for knowledge this type of syntax also works in js but as an proffesional code so do not use this type of code i your projects
const bal = 1000
if(bal) console.log("True");
// if(bal) console.log("True") , console.log("Also True");

console.log("--------------------------------------------------------------");

//Multiple else if statement:Used when checking multiple conditions. The first true condition runs, and the rest are skipped.

// Example:
const balance = 1000

if(balance < 500){
    console.log("Yes,balance is less than 500");
} else if(balance < 750){
    console.log("Yes,balance is less than 750");
} else if(balance < 900){
    console.log("Yes,balance is less than 900");
} else {
    console.log("Yes,balance is less than 1200");
}

console.log("--------------------------------------------------------------");


// Work with multiple Logical Operator
const isUserloggedIn1 = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserloggedIn1 && debitCard && 2==2){ // And conditon(&&) is execute when both the condition become true
    console.log("Allow to purchase course");
}

if(loggedInFromGoogle || loggedInFromEmail){ // Or condition(||) is execute when one of the condition become true
    console.log("Yes, User logged in");  
}

console.log("--------------------------------------------------------------");

//Work with Nullish Coalescing Operator (??): (null.undefined)
// Basically this operator is our callback.How to handle error or instead of error we want to give some value
let val1 = 5 ?? 10
// let val1 = null ?? 10
// let val1 = undefined ?? 10
// let val1 = undefined ?? 10 ?? 20
console.log(val1);

console.log("--------------------------------------------------------------");


//Work with Terniary Operator
// Syntax of terniary operator in js: condition ? true : false

// Example:
const iceTeaPrice = 500

iceTeaPrice >=350 ? console.log("more than") : console.log("less than");






