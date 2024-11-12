const express = require("express");
const userRoute = express.Router();
const controller = require("../Controllers/userController");

userRoute.get("/users", controller.getUsers);
userRoute.get("/users/:id", controller.getUser);
userRoute.post("/users", controller.postUser);
userRoute.put("/users/:id", controller.putUser);
userRoute.delete("/users/:id", controller.deleteUser);

module.exports = userRoute;
