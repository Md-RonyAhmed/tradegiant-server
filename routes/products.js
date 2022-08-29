const express = require("express");
const router = express.Router(); 

const productController = require("../controllers/products");

router.get("/product", productController.allProduct);
router.post("/product", productController.newProduct);

// router.post("/products", productController.newProducts);

module.exports = router;