const express = require("express");
const verifyToken = require("../midleware/verifyToken");
const userRoute = express.Router();

const userController = require("../controllers/userController");

userRoute.post("/user/create", verifyToken, userController.createUser);
userRoute.get("/user/get", verifyToken, userController.getUser);
userRoute.get("/user/getbyid/:id", verifyToken, userController.getUserbyid);
userRoute.put("/user/update/:id", verifyToken, userController.updateUser);
userRoute.delete("/user/delete/:id", verifyToken, userController.deleteUser);
userRoute.post("/user/login", userController.authUser);
module.exports = userRoute;
