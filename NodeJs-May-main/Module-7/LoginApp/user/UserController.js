const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const User = require("../Model/user")
const jwt = require("jsonwebtoken")
const config = require("../config")
router.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
router.use(bodyParser.json())

router.get("/profile", (req, res) => {
    var token = localStorage.getItem("authToken")
    if (!token) {
        res.redirect("/")
    }
    jwt.verify(token, config.secret, (err, verifiedToken) => {
        if (err) {
            res.redirect("/")
        }
        User.findById(verifiedToken.id, { password: 0 }, (err, user) => {
            if (err) {
                res.redirect("/")
            }
            if (!user) {
                res.redirect("/")
            }
            res.render("profile.ejs", { user })
        })
    })
})

router.get("/logout", (req, res) => {
    localStorage.removeItem("authToken")
    res.redirect("/")
})

module.exports = router