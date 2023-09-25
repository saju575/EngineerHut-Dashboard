const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.ObjectId,
        ref: "Customer",
        required: true,
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    orders: [
        {
            productName: {
                type: String,
                required: true,
            },
            productImage: {
                type: String,
                required: true,
            },
            productPrice: {
                type: Number,
                required: true,
            },
            productID: {
                type: mongoose.Schema.ObjectId,
                ref: "Product",
                required: true,
            },
            itemTotal: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            type: {
                type: String,
                required: true,
            },
        },
    ],
    orderDate: {
        type: Date,
        required: true,
    },
    totalprice: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        required: true,
    },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;