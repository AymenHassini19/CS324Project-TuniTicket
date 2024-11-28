var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product", 
        required: true 
    },
    qty: { 
        type: Number, 
        required: true,
        min: 1
    }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
