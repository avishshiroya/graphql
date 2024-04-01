const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:String,
    mobile:Number,

},{timestamps:true})

const userModel =  mongoose.model('User',userSchema)

module.exports = userModel