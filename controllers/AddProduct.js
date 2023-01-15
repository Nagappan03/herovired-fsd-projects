const { Product } = require("../models/UserSchema");

function AddProduct(req, res) {
    let name = req.body.name;
    let totalQuantity = req.body.totalQuantity;
    let category = req.body.category;
    let price = req.body.price;

    let productData = {
        name: name,
        totalQuantity: totalQuantity,
        category: category,
        price: price
    }

    let product = new Product(productData);
    product.save().then(() => {
        res.send("Details saved in DB successfully");
    }).catch((err) => {
        res.send("Could not insert product details into DB");
    })
}

module.exports = AddProduct;