const express = require("express");
const userRoute = express.Router();
const controller = require("../Controllers/userController");
const isAuth = require("../Middlewares/isAuth") 
const isAutho=require('../Middlewares/isAutho')


userRoute.get("/users", controller.getUsers);
userRoute.get("/users/:id",isAuth,isAutho(['user','admin']),controller.getOneUser);
userRoute.post("/users", controller.postUser);
userRoute.put("/users/:id", controller.putUser);
userRoute.delete("/users/:id",isAuth,isAutho(['admin']),controller.deleteUser);
userRoute.post("/signIn", controller.signIn);

module.exports = userRoute;
