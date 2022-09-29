const express = require("express");
const categoryRoute = express.Router();
const verifyToken = require("../midleware/verifyToken");
const categoryController = require("../controllers/categoryController");
categoryRoute.post("/category/create",verifyToken, categoryController.createCategory);
categoryRoute.get("/category/get",verifyToken, categoryController.getCategory);
categoryRoute.put("/category/update/:id",verifyToken, categoryController.updateCategory);
categoryRoute.delete("/category/delete/:id",verifyToken, categoryController.deleteCategory);
module.exports = categoryRoute;
