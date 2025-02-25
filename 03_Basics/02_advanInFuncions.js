//How to Add shopping cart
// Define rest-operatort:The rest operator in JavaScript is represented by the ellipsis ("...") and is used to collect the remaining elements of an array or arguments in a function into a single array. 

function calculatecartPrice(val1,val2,...num){
    return num
}
// console.log(calculatecartPrice(2));
console.log(calculatecartPrice(200,400,300,500)); // [ 200, 400, 300, 500 ] rest operator gives result as an array

// Note:(...) This operator is spread as well as rest operator depends on situation


// How to pass Objects inside the function in js

// const user = {
//     username: "Kritika",
//     isLoggedin: true,
// }
function handleObject(anyobj){
    console.log(`Username is:${anyobj.username}, Is user loged in? ${anyobj.isLoggedin}`)
}
// handleObject(user) // define object first and then call the functionw with object
// You can directly pass the object into the function Also
handleObject({
    username: "Kriitka",
    isLoggedin: true,
})

// Note: You can manually define the object first or direct pass the object also



// How to pass arrays inside the function in js
const myNewArray = [200,400,600,800]

function returnSecondValue(getvalueFromArray){
    // return getvalueFromArray[]
    return getvalueFromArray[1]
}
console.log(returnSecondValue(myNewArray)); // define array first and then call the functionw with object
// You can directly pass the array into the function Also
console.log(returnSecondValue([200,400,600]));

