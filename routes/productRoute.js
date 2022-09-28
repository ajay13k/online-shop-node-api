const express = require("express");
const productRoute = express.Router();

const productController = require("../controllers/productController");
productRoute.post("/product/create", productController.createProduct);
productRoute.get("/product/get", productController.getProduct);
productRoute.put("/product/update/:id", productController.updateProduct);
productRoute.delete("/product/delete/:id", productController.deleteProduct);

module.exports = productRoute;
