//************************************DATES IN JS*******************************
// Define: In JavaScript, the Date object is used to work with dates and times. It provides methods to create, modify, and retrieve date and time values.A Date object represents a single point in time in milliseconds since January 1, 1970 (UTC), known as the Unix Epoch.
let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());

console.log(typeof mydate); // object

//Manually declaring date
// let myCreatedDate = new Date(2025, 0, 25,)
// let myCreatedDate = new Date(2025, 0, 25, 5, 3)
// let myCreatedDate = new Date("2025-01-12") // yyyy-mm--dd
// let myCreatedDate = new Date("2025-01-12") // mm-dd-yyyy prefer in india
let myCreatedDate = new Date("2025-01-12") // mm-dd-yyyy prefer in india
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

// timestamp:In JavaScript, a timestamp is a numeric value that represents the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (Unix Epoch Time). It is commonly used for tracking time, comparing dates, and performing date-related calculations. JavaScript timestamps are based on the milliseconds precision, meaning every timestamp value represents the exact point in time, including milliseconds.

let myTymStamp = Date.now()
console.log(myTymStamp); //(1740128446518) this is the mili seconds from 01-1970 till now
console.log(myCreatedDate.getTime());
console.log(Date.now() / 1000); //converted from mili-sec to seconds
console.log(Date.now() / 1000); //converted from mili-sec to seconds
console.log(Math.floor(Date.now() / 1000)); //use Math.floor to remove decimal values and give exact ans


let myDate = new Date()
console.log(myDate);
console.log(myDate.getMonth() + 1) // we add +1 because it started from 0
console.log(myDate.getDay());

myDate.toLocaleString("default", {
    weekday: "long"
})
console.log(myDate);



