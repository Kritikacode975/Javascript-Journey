//************************************OBJECT DE-STRUCTURE************************************
// Define:

const course = {
    coursename: "Learning Javascript",
    price: "free of cost anyone can access and lean",
    courseInstructor: "Krishna"
}
// console.log(course.courseInstructor)

// how de-structure work

// const {courseInstructor} = course
const {courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor); // rename


