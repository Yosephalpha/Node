const fs = require("fs")

// fs.open("./cool.txt", (err, file) => {
//     if (err) console.log(err)
//     console.log("File opened successfuly")
// })


// fs.stat("./cool.txt", (err, stats) => {
//     console.log(stats.isFile())
//     console.log(stats.isDirectory())
//     console.log(stats.isCharacterDevice())
// })

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error❌", err)
//     }
//     console.log("The content of the file is =>", data)
// })

// const quote = "\nLive more, worry less😀😀"

// fs.appendFile("./cool.txt", quote, (err) => {
//     console.log("Completed appending data")
// })

// fs.unlink("./toRemove.txt", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log("Deleted successfully")
// })

//object => {k:v}

const user = {
    name: "jack",
    age: 20
}
console.log(user)
const userData = JSON.stringify(user)
console.log(userData)

const userParse = JSON.parse(userData)
console.log(userParse)


const movie = {
    name: "The Avengers",
    type: "Hollywood"
}


const movieData = JSON.stringify(movie)
console.log(movieData)

fs.writeFile("movies.json", movieData, (err, movieData) => {
    console.log("WriteFile successfully done")
})




