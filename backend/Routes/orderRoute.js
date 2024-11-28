const express = require("express");
const orderRoute = express.Router();
const controller = require("../Controllers/orderController");
const isAuth = require("../Middlewares/isAuth");
const isAutho = require("../Middlewares/isAutho");

orderRoute.post("/orders", isAuth, controller.createOrder);
orderRoute.get("/orders", isAuth ,isAutho(["admin"]), controller.getOrders);
orderRoute.get("/orders/:id", isAuth, controller.getOrderById);
orderRoute.put("/orders/:id", isAuth, controller.updateOrder);
orderRoute.delete("/orders/:id", isAuth, isAutho(["admin"]), controller.deleteOrder);

module.exports = orderRoute;


