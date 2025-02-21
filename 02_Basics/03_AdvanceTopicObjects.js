//***********************ADVANCE OBJECTS IN JS*************************

// const tinderUser = new Object() // singleton object
const tinderUser1 = {} // not a singleton object
//both have same output {} object
// console.log(tinderUser);
console.log(tinderUser1);

tinderUser1.id = "abc123"
tinderUser1.name = "Kitkat"
tinderUser1.isLoggedIn = false

// console.log(tinderUser1);

// declaring object inside the object
const regularUser = {
    email: "koibhiho@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kritika",
            lastname: "Lohani"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname.lastname); // undefined
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);



// merge two objects value or we can say that merge two objects. Here [{} this is target value and rest source value]
//Object.assign(): This method in JavaScript is used to copy properties from one or more objects to a target object. This method is useful for merging objects or cloning an object

// example1
const obj1 = { 1: "a", 2: "b" };  
const obj2 = { 3: "c", 4: "d" };  
const obj3 = { 5: "e", 6: "f" };  

// const newObj1 = Object.assign({}, obj1, obj2,obj3)
const newObj1 = {...obj1, ...obj2, ...obj3} // using spread this is used 90% and this is latest way 
console.log(newObj1);


//example2
const person = { name: "John", age: 25 };  
const car = { brand: "Toyota", model: "Corolla" };  
const country = { name: "India", capital: "New Delhi" };  
const laptop = { brand: "Apple", model: "MacBook Pro" };  

const newObj = Object.assign({}, person, car, country, laptop)
console.log(newObj);

// fetch values from Database(it is in the form of array)
const users = [
    {
        id: "abc",
        name: "Kitkat"
    },
    {
        id: "ab",
        name: "Kritika"
    },
    {
        id: "a",
        name: "Sonia"
    },
]
console.log(users[0].name)
console.log(users[1].name)
console.log(users[2].name)

console.log(tinderUser1); // return whole object
console.log(Object.keys(tinderUser1)); // return only keys
console.log(Object.values(tinderUser1)); // return only values
console.log(Object.entries(tinderUser1)); // create array inside the array with saperate key+values pair


// Check if the value is exists in object or not
console.log(tinderUser1.hasOwnProperty("isLoggedIn")); // true
console.log(tinderUser1.hasOwnProperty("isLogged")); // false




