const express = require("express");
const orderRoute = express.Router();
const controller = require("../Controllers/orderController");
const isAuth = require("../Middlewares/isAuth");
const isAutho = require("../Middlewares/isAutho");

orderRoute.post("/orders",  controller.createOrder);
orderRoute.get("/orders",  controller.getOrders);
orderRoute.get("/orders/:id", isAuth, controller.getOrderById);
orderRoute.put("/orders/:id", isAuth, controller.updateOrder);
orderRoute.delete("/orders/:id", isAutho(["admin"]), controller.deleteOrder);

module.exports = orderRoute;
