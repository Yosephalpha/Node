const mongoose = require("mongoose")

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