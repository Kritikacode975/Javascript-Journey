// *********************************OBJECTS IN JS*******************************
// Define:
// ->In JavaScript, an object is a collection of key-value pairs where each key (also called a property) maps to a specific value.
//->Objects allow us to store, organize, and manipulate data efficiently. The values inside an object can be of any data type,   including strings, numbers, arrays, functions, or even other objects (nested objects). Unlike arrays, which store values in an ordered list, objects use named keys to access data.
//-> Objects allow us to store, organize, and manipulate data efficiently. The values inside an object can be of any data type, including strings, numbers, arrays, functions, or even other objects (nested objects).
//->Unlike arrays, which store values in an ordered list, objects use named keys to access data. 


//constructor: singleton object- through singleton method (Object.create) 
//Literals not singleton object {}
//Note:Mostly access the object with dot notation in sometimes we have to use square notation while it necessary

// Declaring symbol
const mySymbol = Symbol("key1")


// Object literals
const jsUser = {
    name: "Kritika",
    "full name": "Kritika Lohani", // we can not access this value with dot in that case we use square notation
    // if you want to use as a symbol write inside the square notation
    [mySymbol]: "mykey1",
    age: 21,
    location: "Rajasthan",
    email: "kitkat123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["friday","saturday"]
}


//How to access object
console.log(jsUser.email); // this is also the way to access object but there is one another way you must know
// console.log(jsUser[email]); // ReferenceError: email is not defined this error is occur because the email behind is treated as string
console.log(jsUser["email"]); // right way to access
console.log(jsUser["full name"]);


// Interview queston : Take one symbol add to the object's keys and print it 
console.log(jsUser[mySymbol]);
console.log(typeof jsUser[mySymbol]);


//change the values
jsUser.age = 22
jsUser.email = "sonia@gmail.com"

// freeze the object after that no changes save 
// Object.freeze(jsUser)
jsUser.email = "abc@gmail.com"
console.log(jsUser);

//Add function to object
jsUser.greetings = function(){
    console.log("Hello Javascript user");   
}
jsUser.greetingsTwo = function(){
    console.log(`Hello Javascript user: ${this.name}`); // this gives refers to the perticular property of object
}

console.log(jsUser.greetings); // [Function (anonymous)]
console.log(jsUser.greetingsTwo()); // Hello Javascript user




