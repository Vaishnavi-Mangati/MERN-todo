const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    emial: String,
    password: String
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel