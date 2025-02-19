// ************************************MEMORIES IN JS***********************************************
//-> There are two types of memories in (Stack,Heap)
// defines:
// ->Stack memory is used in primitive datatypes and Heap memory is used in non-primitive datatypes
// ->Stack gives copy of data and Heap gives reference of original value

// Example of Stack : always return the copy of value whenever it will change
let myChannel = "Kritikacode"
let anotherChannel = myChannel

anotherChannel = "godIsGreat"  
console.log(myChannel); 
console.log(anotherChannel); // copy

// Example of Heap : it directly takes the reference from the original value
// Here whatever we perform we perform into the original value 
let userOne = {
    name:"Kritika Lohani",
    age:21,
    email:"abc134@gmail.com,"
}

console.log(userOne);

let userTwo = userOne
userOne.name = "Kitkat"

console.log(userOne.name);
console.log(userTwo.name);







