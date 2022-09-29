const express = require("express");
const shippingRoute = express.Router();
const verifyToken = require("../midleware/verifyToken");
const shippingController = require("../controllers/shippingController");
shippingRoute.post("/shipping/create",verifyToken, shippingController.shippingCreate);
shippingRoute.get("/shipping/get",verifyToken, shippingController.shippingGet);
shippingRoute.delete("/shipping/delete/:id",verifyToken, shippingController.shipingDelete);
shippingRoute.put("/shipping/update/:id",verifyToken, shippingController.shippingUpdate);
module.exports = shippingRoute;
