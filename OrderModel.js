const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let orderSchema = Schema({
    restaurantID: {type: Number},
    restaurantName: {type:String}, 
    subtotal: {type: Number},
    total: {type:Number },
    fee:{type: Number}, 
    tax: {type: Number}, 
    order: {}
});

module.exports = mongoose.model("order", orderSchema);