const Order = require("../Models/Order");

const createOrder = async (req, res) => {
    const { userId, productId, qty } = req.body;
    try {
        const newOrder = new Order({ userId, productId, qty });
        await newOrder.save();
        res.status(201).json({ order: newOrder, msg: "Order created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error creating order" });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        if (orders.length > 0) {
            res.status(200).json({ orders });
        } else {
            res.status(404).json({ msg: "No orders found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error retrieving orders" });
    }
};

const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);
        if (order) {
            res.status(200).json({ order });
        } else {
            res.status(404).json({ msg: "Order not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error retrieving order" });
    }
};

const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { qty } = req.body;
    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, { qty }, { new: true });
        if (updatedOrder) {
            res.status(200).json({ order: updatedOrder, msg: "Order updated successfully" });
        } else {
            res.status(404).json({ msg: "Order not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error updating order" });
    }
};

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedOrder = await Order.findByIdAndDelete(id);
        if (deletedOrder) {
            res.status(200).json({ msg: "Order deleted successfully" });
        } else {
            res.status(404).json({ msg: "Order not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error deleting order" });
    }
};

module.exports = { createOrder, getOrders, getOrderById, updateOrder, deleteOrder };
