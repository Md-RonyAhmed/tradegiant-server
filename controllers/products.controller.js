const Product = require("../models/products.model");

//GET all product at endpoint'/product'
module.exports.allProduct = (req, res) => {
     Product.find({})
       .exec((err, data) => {
         if (err) {
           res.status(500).json({
             error: "There was a server side error!",
           });
         } else {
           res.status(200).json({
             result: data,
             message: "Success",
           });
         }
       });
};
     
//POST  all the product at endpoint '/product'
module.exports.newProduct = (req, res) => {
  Product.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Products were inserted successfully!",
      });
    }
  });
};




