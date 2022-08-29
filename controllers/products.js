const Product = require("../models/products");



//POST '/product'
const newProduct = async (req, res) => {
     const newProduct = new Product(req.body);
  // save this object to database
 await newProduct.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Product inserted successfully!",
      });
    }
  });
};

module.exports = {newProduct};