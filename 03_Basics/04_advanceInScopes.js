// Example 1
function one(){
    const username = "Kritikacode"
    // console.log(username); while calling function one
    

    function two(){
        const website = "Github"
        // console.log(website); access inside the block
        console.log(username); // username is also access because we func two is inside the func one so that func one is global-scope for func two that's why func 1 data is accessible for func two 
    }
    // console.log(website); // because we print outside the funtion two website is declared inside the block so there has been error occur ReferenceError: website is not defined 
    two()
}
one()



// Example 2
if(true){
    const username1 = "Kritikacode"
    // console.log(username1);
    

    if(username1 === "Kritikacode"){
        const website = " Github"
        console.log(username1 + website);
        // console.log(username1);
        
    }
    // console.log(website); //ReferenceError: website is not defined
}
// console.log(username1); //ReferenceError: username is not defined // because it is printed outside the scope


// Example 3
// In js it is say that this is hoisting

//->This is normal function in js
// In normal function while we call function before declaration it should be worked
console.log(addOne(5)) // 6
function addOne(num){
    return num + 1
}

//-> In js we can say this is expression in js variable are able to hold the function, 
// But while while variables holding the function and we call function before declaration it should not be worked
addTwo(5) //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}