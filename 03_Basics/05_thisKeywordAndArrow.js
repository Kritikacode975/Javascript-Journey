//************************ARROW FUNCTION IN JS**********************
// Define-Arrowfunction (()=>):An arrow function is a shorter way to write a function in JavaScript. It uses the => (arrow) syntax and does not have its own this context.

//this keyword refers the current contexts(your values which are hold by variables)

const user = {
    username: "Kritika",
    age: 21,

    welcomeMsg : function(){
        console.log(`${this.username}, Welcome to the website`); // when we are referring current context we user this keyword
        console.log(this);
        
    }
}
// console.log(user); // { username: 'Kritika', age: 21, wecomeMsg: [Function: wecomeMsg] }
user.welcomeMsg() //Kritika, Welcome to the website
user.username = "Kitkat"
user.welcomeMsg()
console.log(this); //When we are inside the node environment the this keyword refer's the empty object and we will get current context empty


// Note: Now the question arise why all this things are happen?
// 1->basically in previously javascript has only one engine which was found inside the browser but now we exculded those engines for example(Node,Deno,etc) now we have stand alone engine

//2-> when the engine run inside the browser maximum tym the global object is window object so that we capture the events like(click,form-Submit,etc) and in node the global object is empty object



// Is this keyword used in function or not?
// this keyword is not able to used in function it is work with object only
// function coffee(){
//     let coffeeLove = "Kritika"
//     console.log(this.coffeeLove); // undefined
    
// }
// coffee()

// const coffee = function(){
//     let coffeeLove = "Kritika"
//     console.log(this.coffeeLove); // undefined
//     console.log(this);
// }

// coffee()

//Used with arrow function
//Basic syntax of arrow function -> () => {} we also hold arrow function inside the variable
const coffee = () => {
    let coffeeLove = "Kritika"
    // console.log(this.coffeeLove); // undefined
    console.log(this); // empty parenthesis {}
}
coffee()

// when we use return keyword this is called explicit method
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(4, 9));


//Used with implicit method: In implicit method we don't have to write return keyword because of one line of statement
//when we use curly braces we have to write return keyword but when we use parenthesis we do not have to write return

// const addTwo1 = (num1,num2) =>  num1 + num2
// const addTwo1 = (num1,num2) =>   ({username:"Kritika"}) //undefined

// If you want to return object with arrow fuction you must wrap object with parenthesis
const addTwo1 = (num1,num2) =>  ({username:"Kritika"}) //
console.log(addTwo1(4, 9));


// // Right sytax with arrow function
// const myArray = [2, 4, 5, 7]

// myArray.forEach(function() {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())





