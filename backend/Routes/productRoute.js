const express = require("express");
const productRoute = express.Router();
const controller = require("../Controllers/productController");
const isAuth = require("../Middlewares/isAuth");
const isAutho = require("../Middlewares/isAutho");

productRoute.get("/products", controller.getProducts);
productRoute.get("/products/:id", controller.getOneProduct);
productRoute.post("/products",isAuth ,isAutho(["admin"]), controller.postProduct);
productRoute.put("/products/:id",isAuth ,isAutho(["admin"]), controller.putProduct);
productRoute.delete("/products/:id",isAuth ,isAutho(["admin"]), controller.deleteProduct);

module.exports = productRoute;
