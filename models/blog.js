const mongoose = require("mongoose")
const schema = mongoose.Schema({
    "name":String,
    "email":String,
    "password":String
})
let blogModel = mongoose.model("blogs",schema)
module.exports = {blogModel}