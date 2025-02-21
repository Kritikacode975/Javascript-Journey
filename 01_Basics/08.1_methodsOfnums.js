//METHODS OF NUMBER DATATYPE
const amount = new Number(400)
console.log(amount); // [Number: 400]


console.log(amount.toString());
console.log(typeof(amount.toString()));
console.log(amount.toString().length);

// console.log(amount.toFixed(2));
console.log(amount.toFixed(1));

//precesion
// const newNumber = 23.9608
// const newNumber = 123.9608
const newNumber = 1123.9608
console.log(newNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // (10,00,000) it is bydefault USA standard
console.log(hundreds.toLocaleString("en-IN")); // (10,00,000) changed from default USA standard to indian standard

//some another methods
console.log(Number.MAX_VALUE);  
console.log(Number.MIN_VALUE);


console.log(Number.isInteger(10));       // true
console.log(Number.isInteger(10.5));     // false
console.log(Number.isInteger("10"));     // false (string, not a number)
console.log(Number.isInteger(1000000));  // true

