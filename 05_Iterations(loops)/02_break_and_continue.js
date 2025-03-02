//************************BREAK AND CONTINUE STATEMENT IN FOR LOOP IN JS**************
// Define Break:The break statement stops a loop immediately and exits it.

console.log("BREAK STATEMENT:");

for (let index = 1; index < 20 ; index++) {
    if(index == 5){
        console.log("Detected 5");
        break // break statment will break the loop and and will jump outside the scope
    }
    console.log(`Value of i is: ${index}`);  
}

console.log("-----------------------------------------------------");


// Define Continue:The continue statement skips the current loop iteration and moves to the next one.

console.log("CONTINUE STATEMENT:");
for (let index = 1; index < 20 ; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue // continue statment will skip the condition once a time and continue with loop
    }
    console.log(`Value of i is: ${index}`);  
}