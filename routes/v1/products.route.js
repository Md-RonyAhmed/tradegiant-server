const express = require("express");
const router = express.Router();

const productController = require("../../controllers/products.controller");

router
  .route("/")
  .get(productController.allProduct)
  .post(productController.newProduct);

router
  .route("/:id")
  .get(productController.singleProduct)
  .delete(productController.deleteProduct);

module.exports = router;
