const express = require("express");
const productRoute = express.Router();
const verifyToken = require("../midleware/verifyToken");

const productController = require("../controllers/productController");
productRoute.post("/product/create",verifyToken, productController.createProduct);
productRoute.get("/product/get",verifyToken, productController.getProduct);
productRoute.put("/product/update/:id",verifyToken, productController.updateProduct);
productRoute.delete("/product/delete/:id",verifyToken, productController.deleteProduct);

module.exports = productRoute;
