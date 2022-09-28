const express = require("express");
const shippingRoute = express.Router();
const shippingController = require("../controllers/shippingController");
shippingRoute.post("/shipping/create", shippingController.shippingCreate);
shippingRoute.get("/shipping/get", shippingController.shippingGet);
shippingRoute.delete("/shipping/delete/:id", shippingController.shipingDelete);
shippingRoute.put("/shipping/update/:id", shippingController.shippingUpdate);
module.exports = shippingRoute;
