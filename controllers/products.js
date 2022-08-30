const Product = require("../models/products");

//GET all product at endpoint'/product'
const allProduct = async (req, res) => {
     await Product.find({})
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
const newProduct = async (req, res) => {
      await Product.insertMany(req.body, (err) => {
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



module.exports = { newProduct,allProduct };
