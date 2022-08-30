const { ObjectId } = require("mongodb");
const Product = require("../models/products.model");

//GET all product at endpoint'/product'
module.exports.allProduct = (req, res) => {
  Product.find({})
    .select({ __v: 0 })
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          data,
          message: "Success",
        });
      }
    });
};

//GET a product at endpoint'/product'
module.exports.singleProduct = (req, res) => {
  Product.find({ _id: req.params.id })
    .select({ __v: 0 })
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          data,
          message: "Success",
        });
      }
    });
};

//POST  all the new product at endpoint '/product'
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

//DELETE a product at endpoint'/product'
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id }).exec((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Successfully deleted the product",
      });
    }
  });
};
