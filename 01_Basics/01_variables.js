//************************* */ VARIABLES in javascript(const,let,var)************************************

// prefer not to use var only use const and let 
// because of issue in block scope and functional scope.

const accountId = 123456 // constant value it cannot be changed
let accountEmail = "kitkat@123gmail.com" 
var accountPassword = "Mai kyu btau..."
accountCity = "Ahmedabad"

// when we dont give value to the variables in js it show undefined  
let accountState

// accountId = 3 // Not allowed, TypeError: Assignment to constant variable 
// console.log(accountId)

// updated values
accountEmail = "abc@123gmail.com"
accountPassword = "Still nai btaungi..."
accountCity = "Guyana"


// console.log(accountEmail)
// console.log(accountPassword)
// console.log(accountCity)

// used to print multiple variables value and it shows the output as a tabular format
console.table([accountEmail,accountPassword,accountCity,accountState])




