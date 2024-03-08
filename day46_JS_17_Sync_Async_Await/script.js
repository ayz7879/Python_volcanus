// synchronus code
const synchronus = () => {
  console.log("superman");
  console.log("spiderman");
  console.log("batman");
};
// asynchronus code
const asynchronus = () => {
  console.log("indian institute of technology");
  setTimeout(() => {
    console.log("vellore institute of technology");
  }, 2000);
  console.log("volcanus");
};

// calling function synchronus
// synchronus()

// calling function asynchronus
// asynchronus()

// fetch data using async await
// const fetchData = async () => {
//   const api = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await api.json();
//   console.log(data);
// };
// fetchData();

const fetchMealData = async () => {
  const api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=American"
  );
  const data = await api.json();
  return data.meals;
};

const showDataToDom = async () => {
  const data = await fetchMealData();
  // console.log("This data is coming from mealDB api",data[0])
  document.querySelector(".main").innerHTML = data.map(
    (e) => `<div>
    <h1>${e.strMeal}</h1>
    <img src=${e.strMealThumb} alt=${e.strmeal} style="width:300px"/>
    </div>`
  );
};
showDataToDom();
