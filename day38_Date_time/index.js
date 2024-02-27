const date = new Date();

const currentDate = date.getDate();
const currentDay = date.getDay();
const year = date.getFullYear();
const month = date.getMonth()+1;
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

console.log(`Today date is ${currentDate}-${month+1}-${year}`)
console.log(`today time is = ${hour}:${minute}:${second}`)