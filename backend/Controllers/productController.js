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
    try {
        const {
            name,
            image,
            description,
            location,
            date,
            category,
            price,
            countInStock,
        } = req.body;

        if (!name || !image || !description || !location || !date || !category || !price || !countInStock) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newProduct = new Product({
            name,
            image,
            description,
            location,
            date,
            category,
            price,
            countInStock,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({ product: savedProduct });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Server error" });
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
