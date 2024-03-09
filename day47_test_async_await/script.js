let endpoint;

document.querySelector(".indian").addEventListener("click", () => {
  endpoint = "indian";
  showData();
});

document.querySelector(".american").addEventListener("click", () => {
  endpoint = "american";
  showData();
});

document.querySelector(".candian").addEventListener("click", () => {
  endpoint = "Canadian";
  showData();
});

document.querySelector(".italian").addEventListener("click", () => {
  endpoint = "italian";
  showData();
});

const fetchData = async () => {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${endpoint}`
  );
  const data = await api.json();
  return data.meals;
};

const showData = async () => {
  const data = await fetchData();
  let html = ""
  data.forEach(element => {
    html += `<div class="items">
            <h2>${element.strMeal}</h2>
            <img style="width:300px" src="${element.strMealThumb}" alt="${element.strMeal}" />
        </div>`;
  });
  document.querySelector(".main").innerHTML = html
};

