const express = require("express")
const MongoClient = require("mongodb").MongoClient
const bodyParser = require("body-parser")
const PORT = 8000
const app = express()

let db;
const MONGO_URL = "mongodb://127.0.0.1:27017"
const collectionName = "userList"


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())



app.use(express.static(__dirname + "/public")) //css
app.set("views", "./views") //pages
app.set("view engine", "ejs") //choosing ejs template


app.get("/", (req, res) => {
    db.collection(collectionName).find().toArray((err, result) => {
        if (err) throw err
        res.render("index.ejs", { data: result })
    })

})


app.post("/addData", (req, res) => {
    db.collection(collectionName).insert(req.body, (err, result) => {
        if (err) throw err
        console.log("Data inserted successfully")
    })
    res.redirect("/")

})


app.delete("/delete_user", (req, res) => {
    db.collection(collectionName).findOneAndDelete({ name: req.body.name })((err, result) => {
        if (err) throw err
        res.send({ message: "success" })
    })

})

app.post("/find_by_name", (req, res) => {
    let name = req.body.name
    db.collection(collectionName).find({ name: name }).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })

})

app.post("/find_by_name", (req, res) => {
    let name = req.body.name
    db.collection(collectionName).find({ name: name }).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })

})

app.put("/update_user", (req, res) => {

    db.collection(collectionName).findOneAndUpdate(
        { name: req.body.name },
        {
            $set: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            }
        },
        { upsert: true },
        (err, result) => {
            if (err) throw err
            res.send(result)
        })

})




app.get("/addUser", (req, res) => {
    res.render("admin")
})

//Mongodb connection 

MongoClient.connect(MONGO_URL, (err, client) => {
    if (err) throw err
    db = client.db("node_may")
    console.log("Mongodb is connected")
    app.listen(PORT, () => console.log("Server started on the port", PORT))
})
