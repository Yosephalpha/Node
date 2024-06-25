import express from 'express';
import path from 'path';
import http from 'http';

const LocalStorage = require('node-localstorage').LocalStorage;
let localStorage = new LocalStorage('./scratch');
const iplocate = require("node-iplocate");
const publicIp = require('public-ip');
let io = require('socket.io');
let app = express();
const PORT = 4000

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index.html")
})



let server = http.createServer(app).listen(PORT, () => {
    console.log("Server started on the PORT", PORT)
})

io = require("socket.io").listen(server)


//handle socket

io.sockets.on("connection", (socket) => {
    var list = io.sockets.sockets
    console.log(list)
    var users = Object.keys(list)
    console.log(users)

    //set nickname

    socket.on("nick", (nick) => {
        socket.set("nickText", nick)
        socket.emit("userList", users)
    })

    //chat data 

    socket.on("chat", (data) => {
        socket.get("nickText", (err, nick) => {

            //get public IP address

            publicIp.v4().then((ip) => {
                iplocate(ip).then((results) => {
                    console.log("Public Ip", results)
                    let response = JSON.stringify(results.city)
                    console.log(response)
                    localStorage.setItem("userlocal", response)
                })
            })


            let nickName = err ? "Anonymous" : nick
            let payload = {
                message: data.message,
                nick: nickName,
                location: localStorage.getItem("userlocal")
            }

            console.log(payload)

            socket.emit("chat", payload)
            socket.broadcast.emit("chat", payload)
        })
    })


})
