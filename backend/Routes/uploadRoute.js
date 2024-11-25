const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Configure Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../frontend/public/assets/products")); // Destination folder
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Save the file with its original name
    },
});

const upload = multer({ storage });

// Define upload endpoint
router.post("/", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    res.json({ imagePath: `assets/products/${req.file.filename}` });
});

module.exports = router;
