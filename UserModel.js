const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Order = require('./OrderModel');

let userSchema = Schema({
    username:{type:String, required: true},
    password:{type:String, required:true},
    privacy:{type:Boolean},
    orders: Array
});

module.exports = mongoose.model("users", userSchema);