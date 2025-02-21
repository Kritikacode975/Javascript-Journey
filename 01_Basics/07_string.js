// ****************************************************** STRING IN JS***********************************************
// define string: In Js a string is a sequence of characters used to represent text. It is one of the primitive data types and can include letters, numbers, symbols, and even emojis. Strings in JavaScript can be enclosed in single quotes ('), double quotes ("), or backticks (`) for template literals. Strings are immutable, meaning their values cannot be changed once created, but new strings can be formed by modifying existing ones. 

const name = "Kritika"
const mergeRepo = "Kritikacode975"

//Do not use this syntax (concatanation) this is outdated its is just for practice
// console.log(name + mergeRepo + " value");

// working with string in js we use modern technique called backticks (`) 
// This syntax is more readable and more reliable it is also called string interpolation .We also perform different methods of strings wth this
console.log(`Hello my name is: ${name} and My Github account name is: ${mergeRepo} `);


// Declaration of string in js.Here (new keyword is used for objects of js)

const gameName = new String("Counter-String")
console.log(gameName[0]);
console.log(gameName.__proto__);





