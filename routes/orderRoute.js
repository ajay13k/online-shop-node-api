const express = require("express");
const orderRoute = express.Router();
const verifyToken = require("../midleware/verifyToken");
const orderController = require("../controllers/orderController");
orderRoute.post("/order/create",verifyToken, orderController.createOrder);
orderRoute.get("/order/get",verifyToken, orderController.getOrder);
orderRoute.put("/order/update/:id",verifyToken, orderController.updateOrder);
orderRoute.delete("/order/delete/:id",verifyToken, orderController.deleteOrder);
module.exports = orderRoute;
