//*************************************METHODS OF STRING IN JS***********************************************
const gameName = new String("Counter-String")

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("S"));
// console.log(gameName.length);

const newString = gameName.substring(0, 6) //Here last value is not include in output and we cannot take negative value in substring method
console.log(newString);

//example of slice
// const anotherString = gameName.slice(0,6)
const anotherString = gameName.slice(-8, -4) 
console.log(anotherString);


let str1 = "JavaScript";
console.log(str1.slice(-4));  // Output: "ript"  (Last 4 characters)
console.log(str1.slice(-6, -2));  // Output: "aScr" (From -6 to -2)


let str2 = "KritikaCode";
let lastThree = str2.slice(-3);  
console.log(lastThree);  // Output: "ode"


//example of trim, replace, includes and split

const newStringOne = "   Kritika    "
console.log(newStringOne);
console.log(newStringOne.trim()); //it remove the white-spaces

const url = "https://kritika.com/kritika%20Lohani"
console.log(url);
console.log(url.replace("%20", "-"));

console.log(url.includes("kritika")); //(true) It check the perticular value is include or not in the string
console.log(url.includes("sonia")); //false


console.log(gameName.split("-")); //convert string as an array form based on something(like spaces,dash,etc)






