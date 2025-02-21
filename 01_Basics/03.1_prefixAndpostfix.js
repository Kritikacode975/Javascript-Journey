//********************************PREFIX AND POSTFIX********************************
// In JavaScript, prefix and postfix operators are used with increment (++) and decrement (--) operations. They affect how a variable's value is updated and returned.


// Define-preix: The value is increased/decreased first, then used in the expression.
let a = 5;
let b = ++a;  // First, 'a' is increased to 6, then assigned to 'b'

console.log(a); // 6
console.log(b); // 6

// Define-postfix: he original value is used first, then it is increased/decreased.
let x = 5;
let y = x++;  // First, 'x' is assigned to 'y' (5), then 'x' is increased to 6

console.log(x); // 6
console.log(y); // 5


