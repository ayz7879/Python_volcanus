// console.log("hello console");

// const heros = {
//   name: "superman",
//   age: 20,
//   salary: 789064,
//   company: function () {
//     return this;
//   },
// };
// console.log(this);
// console.log(heros);

// function Product(name,price,quantity) {
//     this.name = name
//     this.price = price
//     return this
// }
// Product.prototype.brandName = "apple"

// let p1 = new Product("ashish",2020,5)
// let p2 = new Product("ashish1",2020,5)
// console.log(p1.brandName)
// console.log(p2)

class car{
    constructor(brandname,price,color){
        this.brandname = brandname
        this.price = price;
        this.color = color;
    }
    Display(){
        console.log(
          `The car brandname = ${this.brandname} and price = ${this.price} and color = ${this.color}`
        );
    }
}
class BMW extends car{
    constructor(wheels,power,brandname,price,color){
        super(brandname, price, color);
        this.wheels = wheels
        this.power = power
    }
    Display(){
        // this.Display();
        console.log(
          `The car brandname = ${this.brandname} and price = ${this.price} and color = ${this.color} and wheels = ${this.wheels}and wheels = ${this.power}`
        );
    }
}
// const c1 = new car("Bmw",8797,"blue")
const c1 = new BMW(4,1020,"Bmw",8797,"blue")
c1.Display()
