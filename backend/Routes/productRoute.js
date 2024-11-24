const express = require("express");
const productRoute = express.Router();
const controller = require("../Controllers/productController");

productRoute.get("/products", controller.getProducts);
productRoute.get("/products/:id", controller.getOneProduct);
productRoute.post("/products", controller.postProduct);
productRoute.put("/products/:id", controller.putProduct);
productRoute.delete("/products/:id", controller.deleteProduct);

module.exports = productRoute;
