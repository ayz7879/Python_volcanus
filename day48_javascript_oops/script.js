// const person = {
//   name: "ram",
//   salary: 26564,
//   display: function p() {
//     console.log(`Name is : ${this.name} and salary is : ${this.salary}`);
//   },
// };
// console.log(person);
// console.log(person.display());

class car{
    constructor(name,price,brandName){
        this.name = name
        this.price = price;
        this.brandName = brandName;
    }
}
c = new car("ashish",50,"bmw")
console.log(c)


