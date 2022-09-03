const mongoose = require("mongoose"); //import mongoose

// product schema
const ProductSchema = new mongoose.Schema({
    name:String,
    image: String,
    description: String,
    category:[String],
    color: String
});

const Product = mongoose.model('Product', ProductSchema); //convert to model named Product
module.exports = Product; //export for controller use
