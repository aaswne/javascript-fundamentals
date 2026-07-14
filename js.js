// // const person = {

// const { use } = require("react");

// //     name:"aswin",
// //     age:23,
// //     place:"calicut"
// // }

// // console.log(person.name)


// // person.education = "bca"

// // console.log(person)

// // const car = {
// //   brand: "BMW",
// //   year: 2022
// // };

// // // Update year to 2024


// // car.year=2024

// // console.log(car)


// // 1. Destructure name and age from the object.
// const person = {
//   name: "Aswin",
//   age: 23,
//   place: "Calicut"
// };

// // Expected Output:
// // Aswin
// // 23

// const{name ,  age} = person

// console.log(name,age)



// // 2. Rename the 'name' property to 'fullName' using destructuring.
// const student = {
//   name: "Rahul",
//   course: "BCA"
// };

// // Expected Output:
// // Rahul

// const{name:fullname}= student

// console.log(fullname)


// 3. Use a default value for age if it doesn't exist.
const user = {
  name: "John"
};

const {name,age=18}=user;

console.log(name,age)

// Expected Output:
// John
// 18




// 4. Destructure the first and third elements from the array.
const colors = ["Red", "Green", "Blue", "Yellow"];

// Expected Output:
// Red
// Blue





// 5. Skip the second element and get the first and third elements.
const numbers = [10, 20, 30, 40];

// Expected Output:
// 10
// 30


