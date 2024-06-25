const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const User = require("../Model/user")
const jwt = require("jsonwebtoken")
const config = require("../config")
const LocalStorage = require("node-localstorage").LocalStorage
localStorage = new LocalStorage("../scratch")

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.post("/register", (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8)
    console.log(hashedPassword)
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }).then((registeredUser) => {
        console.log("registeredUser", registeredUser)
        var token = jwt.sign({ id: registeredUser._id }, config.secret, {
            expiresIn: 86400
        })
        console.log(token)
    })
    res.redirect("/")
})

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) return res.send("error on server")
        console.log(user)
        if (!user) {
            return res.send({ auth: false, token: null, msg: "Invalid credentials" })
        }
        const storedDbPassword = user.password
        console.log(storedDbPassword)
        const isPasswordMatch = await bcrypt.compare(req.body.password, storedDbPassword)
        console.log(isPasswordMatch)
        if (!isPasswordMatch) {
            return res.send({ auth: false, token: null, msg: "Invalid credentials" })
        }
        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400
        })
        console.log(token)
        localStorage.setItem("authToken", token)
        res.redirect("/users/profile")  // Changed to absolute path
    })
})

module.exports = router
