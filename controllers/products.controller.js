const Product = require("../models/products.model");

//GET all product with pagination at endpoint'/product'
module.exports.allProduct = async (req, res) => {
  const limit = Number(req.query.limit);
  const pageNumber = Number(req.query.pageNumber);
  try {
    const products = await Product.find()
      .select({ __v: 0 })
      .skip(limit * pageNumber)
      .limit(limit);

    const count = await Product.estimatedDocumentCount();

    if (!products?.length) {
      return res.send({ success: false, error: "No product found" });
    }

    res.send({ success: true, data: products, count });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
};

//GET latest products with pagination at endpoint'/product'
module.exports.latestProducts = async (req, res) => {
  const limit = Number(req.query.limit);
  const pageNumber = Number(req.query.pageNumber);
  try {
    const products = await Product.find()
      .sort({ $natural: -1 })
      .select({ __v: 0 })
      .skip(limit * pageNumber)
      .limit(limit);

    const count = await Product.estimatedDocumentCount();

    if (!products?.length) {
      return res.send({ success: false, error: "No product found" });
    }

    res.send({ success: true, data: products, count });
  } catch (error) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
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
