
// function async1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Async 1 completed")
//             reject("Result from async1")
//         }, 1000)
//     })
// }


// function async2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Async 2 completed")
//             resolve("Result from async2")
//         }, 1000)
//     })
// }

// function async3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Async 3 completed")
//             resolve("Result from async3")
//         }, 1000)
//     })
// }



// async1()
//     .then(result1 => {
//         console.log(result1)
//         return async2()
//     })
//     .then(result2 => {
//         console.log(result2)
//         return async3()
//     })
//     .then(result3 => {
//         console.log(result3)
//         console.log("All async func completed")
//     })
//     .catch(error => {
//         console.log("An error occurred", error)
//     })


//promise all

let p1 = Promise.resolve(30)
let p2 = 100
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "😀")
})

Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values)
})