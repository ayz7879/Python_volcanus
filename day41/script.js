let movebtn = document.querySelector(".movebtn");

movebtn.addEventListener("click", () => {
  let div = document.querySelector(".move");
  div.style.position = "absolute";
  div.style.right = "10rem"
  div.innerHTML = "superman"
});
