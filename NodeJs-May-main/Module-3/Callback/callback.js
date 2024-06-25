const fs = require("fs")


function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function doMath() {
    const result1 = add(3, 4);
    const result2 = multiply(result1, 2);
}

console.log(doMath());




function user(name, callback) {
    console.log("Hi", name)
    callback()
}

//callback func

function callMe() {
    console.log("I am a callback function")
}

user("jack", callMe)

// callback in Synchronous and Asynchronous 

//Asynchronous = > writeFile()
//node callback.js 5

// const [, , noOfFiles] = process.argv
// console.log(noOfFiles)
// const quote = "No beauty shines that that of a good heart😀"

// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote, () => {
//         console.log(`Completed writing file text-${i}.html`)
//     })
// }



//Synchronous = > writeFileSync()
//node callback.js 5

const [, , noOfFiles] = process.argv
console.log(noOfFiles)
const quote = "No beauty shines that that of a good heart😀"

for (let i = 1; i <= noOfFiles; i++) {
    fs.writeFileSync(`./backup/note-${i}.txt`, quote)
    console.log(`Completed writing file note-${i}.txt`)
}



//callback abstraction

function fetchData(callback) {

    setTimeout(() => {
        const data = { message: "Data fetched successfully" }
        callback(null, data)
    }, 3000)
}


function handleData(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}

fetchData(handleData)


//callback chaining =>

const cartItems = ["shirts", "pants", "shoes", "watch"]

// api.createOrder(cartItems, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.orderSection()
//         })
//     })
// })
//inversion of control => callback hell => pyramid of doom


//callback chaining

function timeToDelay(sec, callback) {
    setTimeout(callback, sec * 2000)
}

console.log("Start Timer")

timeToDelay(2, () => {
    console.log("Two seonds")
    timeToDelay(3, () => {
        console.log("Three seonds")
        timeToDelay(4, () => {
            console.log("Four seonds")

        })
    })
})

//Promise

let text = "hello123"

const promise = new Promise(function (resolve, reject) {
    if (text == "hello") {
        resolve("There is a text")
    } else {
        reject("There is no text")
    }
})

// console.log(promise)

//promise chaining => .then()

// createOrder(cartItems)
//     .then((orderId) => proceedToPayment(orderId))
//     .then((paymentInfo) => showOrderSummary(paymentInfo))
//     .then((paymentInfo) => updateOrderSection(paymentInfo))

