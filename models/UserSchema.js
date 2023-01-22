const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
    username: String,
    email: String,
    password: String,
    encryptedPassword: String
});

const Products = new Schema({
    name: String,
    totalQuantity: Number,
    category: String,
    price: Number
});

const UserModel = mongoose.model('Userdata', Users);
const ProductModel = mongoose.model('Product', Products);

module.exports = { UserModel, ProductModel };