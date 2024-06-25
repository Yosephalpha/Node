import mongoose, { model } from "mongoose";

var Schema = mongoose.Schema

var userModel = new Schema({
    name: String,
    age: Number,
    city: String
})

export default model("users", userModel)
