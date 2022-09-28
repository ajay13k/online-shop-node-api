const express = require("express");
const categoryRoute = express.Router();
const categoryController = require("../controllers/categoryController");
categoryRoute.post("/category/create", categoryController.createCategory);
categoryRoute.get("/category/get", categoryController.getCategory);
categoryRoute.put("/category/update/:id", categoryController.updateCategory);
categoryRoute.delete("/category/delete/:id", categoryController.deleteCategory);
module.exports = categoryRoute;
