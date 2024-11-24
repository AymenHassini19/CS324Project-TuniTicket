const Product = require("../Models/Product");

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (products && products.length > 0) {
            res.status(200).json({ products: products });
        } else {
            res.status(500).json({ message: "No products found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
};

// Get a single product
const getOneProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const foundProduct = await Product.findById(id);
        if (foundProduct) {
            res.status(200).json({ product: foundProduct });
        } else {
            res.status(404).json({ msg: "No product found with the given ID" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error retrieving the product" });
    }
};

// Add a new product
const postProduct = async (req, res) => {
    const product = req.body;
    try {
        const newProduct = new Product(product);
        await newProduct.save();
        res.status(200).json({ product: newProduct, msg: "Product successfully added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error adding the product" });
    }
};

// Update a product
const putProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    try {
        await Product.findByIdAndUpdate(id, product);
        res.status(200).json({ msg: "Product update success" });
    } catch (error) {
        res.status(500).json({ msg: "Error updating the product" });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ msg: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error deleting the product" });
    }
};

module.exports = { getProducts, postProduct, putProduct, deleteProduct, getOneProduct };
