//**********************SWITCH STATEMENT IN JS**************************
// Define:A switch statement in JavaScript is used to execute different blocks of code based on a         given value. It works like an alternative to multiple if-else conditions.

// Syntax of switch in js
// switch(key) {
//     case value:
//         break
    
//     default:
//         break:
// }

// Note:In switch statement we check the multiple values of key

// Example:
const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("Not matched");
        
        break;
}

// Note:In switch statement by default if your key matched with value rest code also executed so the problem arise switch will not match the next block and run the code also give output of rest code except default block