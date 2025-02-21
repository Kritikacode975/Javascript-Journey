// ****************************************NUMS AND MATHS IN JS*********************************************
// Nums
const score = 200 
console.log(score); //200

// declaring Number datatype
const amount = new Number(400)
console.log(amount); // [Number: 400]


//Math object: this liabrary is bydefault present in the jsk 
console.log(Math);
console.log(Math.abs(-4)); // It convert negative value into the positive and give absolute value
console.log(Math.round(4.4));
console.log(Math.round(4.6)); //if the value is bigger than five output will be the next number of existing number
console.log(Math.ceil(4.2));// choose the top value
console.log(Math.floor(3.5)); // choose the bottom value
console.log(Math.max(2,4,6,5));
console.log(Math.min(8,4,6,5));


//working with random
console.log(Math.random()); // everytimes change the value. Values are always between 0 and 1
console.log(Math.floor((Math.random() * 10)) + 1); // return the single value

