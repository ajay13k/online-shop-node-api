const express = require("express");
const userRoute = express.Router();

const userController = require("../controllers/userController");

userRoute.post("/user/create", userController.createUser);
userRoute.get("/user/get", userController.getUser);
userRoute.get("/user/getbyid/:id", userController.getUserbyid);
userRoute.put("/user/update/:id", userController.updateUser);
userRoute.delete("/user/delete/:id", userController.deleteUser);
userRoute.post("/user/login", userController.authUser);
module.exports = userRoute;
