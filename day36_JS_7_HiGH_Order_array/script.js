// find element which in array in boolean expression
// const phones = ["apple","lenovo","dell", "xiaomi","hp"]
// console.log(phones.includes("apple"))

// pick all element of array map work like this
// const arr = [10, 20, 30, 40, 50, 60, 70];
// const result = arr.map((element) => element+20)
// console.log(result)

// filter element in array
// const arr = [10, 20, 30, 50, 40, 80, 90];
// const filterData = arr.filter((element)=>element<80)
// console.log(filterData)

const products = [
  {
    id: 1,
    title: "iphone14",
    category: "phone",
    price: 69999,
  },
  {
    id: 2,
    title: "realme",
    category: "phone",
    price: 22000,
  },
  {
    id: 3,
    title: "oneplus",
    category: "mobiles",
    price: 33000,
  },
  {
    id: 4,
    title: "hp",
    category: "mobiles",
    price: 150000,
  },
  {
    id: 5,
    title: "apple ipad",
    category: "gaming",
    price: 200000,
  },
  {
    id: 6,
    title: "Ps2",
    category: "gaming",
    price: 6000,
  },
];

// const filterSearch = "mobiles";
// const filterByCategory = products.filter(
//   (product) => product.category.toLowerCase() == filterSearch.toLowerCase()
// );
// console.log(filterByCategory);

// const filterByPrice = products.filter((data) => data.price >= 59999);
// console.log(filterByPrice);

// const filterSearchTitle = products.filter((element)=>element.title.toLowerCase().includes("ip"))
// console.log(filterSearchTitle);
