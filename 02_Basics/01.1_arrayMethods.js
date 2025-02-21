//METHODS OF ARRAY
const myArr = [3,2,6,8,4,5]
console.log(myArr);

myArr.push(8) // add element at the last position
myArr.push(9) 
myArr.pop() // remove element from the last position
myArr.unshift(9) // Adds Elements at the Beginning
myArr.shift() // Removes the First Element
console.log(myArr);

// Question methods
console.log(myArr.includes(4)); // true
console.log(myArr.indexOf(6));
console.log(myArr.indexOf(9)); // if the element is not in array it gives the index value (-1)


//Using join
const newArray = myArr.join() // join combine the array with string and gives the output in string format
console.log(newArray); 
console.log(typeof newArray); 


//Slice and Splice
//slice: when we working with slice the original array should not be change it remains same 
console.log("A ", myArr);
const myNew1 = myArr.slice(1,3) //[ 2, 6 ]
console.log(myNew1);

//splice : splice manuplates the original array and remove perticular section which we selected from original array
console.log("B ", myArr);
const myNew2 = myArr.splice(1,3) //[ 2, 6, 8 ]
console.log(myNew2);

console.log("C ", myArr); // after splicing original array is manipulated [ 3, 4, 5, 8 ]


// Advance methods
//how to merge two array 
const marvalHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]


//using push: This is not apropriate method it is just for practice and learning how js work
//Here with this method it does not merge actually .Here it takes another array as an data and give output
// marvalHeros.push(dcHeros)
// console.log(marvalHeros);
// console.log(marvalHeros[3]);
// console.log(marvalHeros[3][2]);


//using concate: 
const allHeros = marvalHeros.concat(dcHeros)
console.log(allHeros);


// using spread[...]
//While using spread the array converted into the individual value
const allNewHeros = [...marvalHeros, ...dcHeros]
console.log(allNewHeros); //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


//using flat:The flat method in Js removes nested arrays by the specified depth and returns a new array with flattened values.
const anotherArray = [1, 4, 5, [2, 5, 7], 5, [6, 7, [4, 5]]];
// const updatedArray = anotherArray.flat(3)
const updatedArray = anotherArray.flat(Infinity)
console.log(updatedArray);


//Ask array or not
// Array.isArray(): Checks if a value is an array. It returns the ans true/false
console.log(Array.isArray("Kritika")); // false but if you want to convert into the array you can


// Array.from(): Converts to an array
console.log(Array.from("Kritika")); // converted to the array
// console.log(Array.from({name: kritika})); // when we give this type of input it doent convert directly because it is key+value we have to tell that we want key's array or value's array


//Array.of(): Return the new array from the set of element it should be anything like (arrays,variables,etc)
let score1 = 200
let score2 = 400
let score3 = 600
console.log(Array.of(score1,score2,score3));





