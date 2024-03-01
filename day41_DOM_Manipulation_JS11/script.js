// const element = document.querySelector(".container")

// childnodes
// console.log(element.childNodes)
// console.log(element.children)

// firstelementchild
// console.log(element.firstElementChild)

// lastelementchild
// console.log(element.lastElementChild.innerHTML)

// const child2 = document.querySelector(".child2")
// console.log(child2.innerHTML)

// console.log(child2.previousElementSibling.innerHTML)

// console.log(child2.nextElementSibling.innerHTML)

// const div = document.createElement("div")

// let btn = document.querySelector("button");

let button = document.createElement("button")
button.innerText= "Add element"
document.querySelector("body").appendChild(button)

let btn = document.querySelector("button")

btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "yellowgreen";

  div.setAttribute("class", "box");
  div.setAttribute("id", "batman");

  div.innerText = "this is my inner text";
  console.log("this is myy div", div);

  document.querySelector("body").appendChild(div);
});
