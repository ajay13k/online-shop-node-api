const express = require("express");
const orderRoute = express.Router();
const orderController = require("../controllers/orderController");
orderRoute.post("/order/create", orderController.createOrder);
orderRoute.get("/order/get", orderController.getOrder);
orderRoute.put("/order/update/:id", orderController.updateOrder);
orderRoute.delete("/order/delete/:id", orderController.deleteOrder);
module.exports = orderRoute;
