const express = require("express");
const router = express.Router(); 

const productController = require("../controllers/products");

router.post("/product", productController.newProduct);

module.exports = router;