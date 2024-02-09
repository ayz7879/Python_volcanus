// const arr = [10, 20, "Thor", "Hulk", 20989.34, 400];

// ===========for loop================
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }
// console.log(arr.length);

// ==========while loop===============
// let i = 0;
// while (i<arr.length) {
//     console.log(arr[i])
//     i++;
// }

// ==========do while loop============
// do{
//     console.log(arr[i])
//     i++;
// }
// while(i<arr.length)

// foreach,map,filter

// ==========for in loop============
// for (const i in arr) {
//   console.log(element);
// }

// ==========for of loop============
// for (const i of arr) {
//     console.log(i)
// }

// const person = {
//   Name: "ashish",
//   surname: "yadav",
//   age: 22,
//   gender: "male",
//   height: "5.5 foot",
//   weight: "60kg",
//   course: "python",
//   interest: "web development",
// };
// for (const key in person) {
//   const element = person[key];
//   console.log(`${key}:${element}`);
// }

// ==========for each============
const arr = [10, 20, "Thor", "Hulk", 20989.34, 400];
arr.forEach((value, index) => {
  console.log(value, index);
});
