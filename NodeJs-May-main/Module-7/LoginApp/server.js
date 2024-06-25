const express = require("express")
const app = express()
const bcrypt = require("bcryptjs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


app.use(express.static(__dirname + "/public")) //css
app.set("views", "./views") //pages
app.set("view engine", "ejs") //choosing ejs template


app.get("/", (req, res) => {
    res.render("index", {
        error: req.query.valid ? req.query.valid : "",
        msg: req.query.msg ? req.query.msg : ""
    })
})

app.get("/signup", (req, res) => {
    res.render("signup")
})


//generate password

// async function genPassword(password) {
//     const salt = await bcrypt.genSalt(10)//bcrypt.genSalt(no. of rounds)
//     console.log(salt);
//     const hashedPassword = await bcrypt.hash(password, salt)
//     console.log(hashedPassword)
// }


// genPassword("password@123")


//same input means same hash value

//password@123 + kdjsakyfry4hdjdlsi(random string => salting) => 8657684784
//password@123 + dskdfhkds => 6736574365
//password@123 + abjDIASFHAJFOEJGERJ038r9yqwdjwgdwahrqy982ryfkjsafjdkafsdgsh => 6942481647


// 1. kdjsakyfry4hdjdlsi => 10 rounds => 8s ✅
// 2. dskdfhkds  => 3 rounds => can be repeated  => 1s
// 3. abjDIASFHAJFOEJGERJ038r9yqwdjwgdwahrqy982ryfkjsafjdkafsdgsh  => 100 rounds => 4 mins ❌



mongoose.connect("mongodb://127.0.0.1:27017/node_may", {
    useNewUrlParse: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log("Failed to connect to MongoDB", err)
    } else {
        console.log("Mongodb is connected")
    }

})

const AuthController = require("./auth/AuthController")
app.use("/api/auth", AuthController)

const UserController = require("./user/UserController")
app.use("/users", UserController)

app.listen(PORT, () => console.log("Server started on the PORT", PORT))