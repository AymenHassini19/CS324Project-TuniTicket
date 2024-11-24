var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    countInStock: { 
        type: Number, 
        required: true 
    },
    rating: { 
        type: Number, 
        default: 0 
    },
    numReviews: { 
        type: Number, 
        default: 0 
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
