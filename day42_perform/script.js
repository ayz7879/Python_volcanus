let num1 = document.querySelector(".firstval")
let num2 = document.querySelector(".secondval")



document.querySelector(".add").addEventListener("click",()=>{
    let h2 = document.createElement("h2");
    let add = parseInt(num1.value) + parseInt(num2.value)
    h2.innerHTML = add
    document.querySelector("body").append(h2)
})
document.querySelector(".subtract").addEventListener("click",()=>{
    let h2 = document.createElement("h2");
    let subtract = parseInt(num1.value) - parseInt(num2.value)
    h2.innerHTML = subtract
    document.querySelector("body").append(h2)
})