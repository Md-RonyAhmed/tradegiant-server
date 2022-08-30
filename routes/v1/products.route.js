const express = require("express");
const router = express.Router();

const productController = require("../../controllers/products.controller");

router
  .route("/")
  .get(productController.allProduct)
  .post(productController.newProduct);



module.exports = router;
