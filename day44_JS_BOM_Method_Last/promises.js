// promise has 3 stage
// 1.Pending Stage
// 2.Resolve .then()
// 3.Reject .catch()
let gourav = 10000
let ashish = 1000

let p = new Promise((resolve, reject) => {
    let rupees = gourav- ashish
    if (ashish >rupees) {
        resolve({rupees,data:"ok bhai i will stand with you anytime"})
    }
    else{
        reject("this is my backup plan")
    }
})
p.then((msg) => msg.rupees + 5000).then((data)=>console.log(data)).catch((msg) => console.log(msg));