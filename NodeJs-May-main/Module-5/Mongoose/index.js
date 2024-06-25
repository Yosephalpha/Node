import express from "express"
import mongoose from 'mongoose';
import userModel from "./model/userModel.js"
const app = express()
const PORT = 4000

//inbuilt middleware
app.use(express.json())

const MONGO_URL = 'mongodb://127.0.0.1:27017/node_may'

mongoose.connect(MONGO_URL)
console.log("Mongodb is connected")

app.get('/', function (req, res) {
    res.send('Welcome to UserList')
})

//add new user
app.post('/addUser', function (req, res) {
    userModel.create(req.body).then(() => {
        res.send('User added successfully')
    })
})

//get user

app.get('/getUser', function (req, res) {
    userModel.find().then((result) => {
        res.send(result)
    })
})

//delete user
app.delete('/deleteUser', function (req, res) {
    userModel.findOneAndDelete({ name: req.body.name }).then((result) => {
        res.send("User deleted successfully")
    })
})


//update user
app.put('/updateUser', function (req, res) {
    userModel.findOneAndUpdate(
        { name: req.body.name },
        {
            $set: {
                name: req.body.name,
                age: req.body.age,
                city: req.body.city
            }
        },
        { upsert: true }
    )
        .then((result) => {
            res.send("User updated successfully")
        })
})




app.listen(PORT, () => console.log('The server started on the port', PORT))


